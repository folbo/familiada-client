<script>
    import { onMount, setContext } from 'svelte';
    import { width, height, pixelRatio, context, props } from './store.js';
    
    let canvas;
    let renderableComponents = [];
    
    setContext('a', {
        register(component) {
            renderableComponents.push(component);
        },
        unregister(component) {
            renderableComponents.splice(renderableComponents.indexOf(component), 1);
        }
    })
    
    onMount(() => {
        const ctx = canvas.getContext('2d', {});
        
        context.set(ctx);
        
        let frameId;
        
        (function update() {
            frameId = requestAnimationFrame(update);
            
            ctx.save();
            ctx.scale($pixelRatio, $pixelRatio);
            renderableComponents.forEach(component => {
                try {
                    if (component.mounted && component.render) {
                        component.render($props);
                    }
                } catch (err) {
                    console.error(err);
                    cancelAnimationFrame(frameId);
                    console.warn('Animation loop stopped due to an error');
                }
            });
            ctx.restore();
        })();
        
        return () => {
            cancelAnimationFrame(frameId);
        }
    });
    
    function handleResize () {
        width.set(window.innerWidth);
        height.set(window.innerHeight);
        pixelRatio.set(window.devicePixelRatio);
    }
</script>

<canvas 
    bind:this={canvas}
    width={$width * $pixelRatio}
    height={$height * $pixelRatio}
    style="width: 100%; height: 100%;"
/>

<slot/>

<svelte:window on:resize|passive={handleResize} />