<script>
    import { onMount, createEventDispatcher } from 'svelte';
    
    const dispatcher = createEventDispatcher();

    export let Component = null;

    onMount(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    function requestClose() {
        dispatcher("close");
    }
</script>

<div class="container">
    <button class="closeButton" on:click={() => requestClose()}>X</button>
    <svelte:component this={Component} />   
</div>

<style>
    .container {
        overflow:auto;
        max-height: 100vh;
        position:relative;
    }

    .closeButton {
        position: absolute; 
        top: 0;
        right: 0; 
        z-index:99;
    }
</style>