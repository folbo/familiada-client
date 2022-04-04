<script>
    import { gameSettings, history } from './store.js'
    import Canvas from './Canvas.svelte';
    import Background from './renderables/Background.svelte';
    import Stage from './renderables/Stage.svelte';
    import PauseOverlay from './PauseOverlay.svelte';
    import MenuContainer from './MenuContainer.svelte';
    
    let paused = false;

    let menuComponent;

    export const openMenu = (comp) => {
        paused = true;
        menuComponent = comp;
    }

    export const closeMenu = () => {
        paused = false;
        menuComponent = undefined;
    }
    
    let winningSide;
    
    function handleInput(e) {
        if (winningSide || paused) {
            return;
        }
        
        [winningSide] = Object
            .keys($gameSettings.players)
            .filter(x => e.code === $gameSettings.players[x].actionKey);
        
        if (winningSide) {
            $history.push(winningSide);
            setTimeout(() => winningSide = undefined, 1000);
        }
    }
</script>

<div class="game">
    <Canvas>
        <Background/>
        <Stage activeSide={winningSide}/>
    </Canvas>
</div>

{#if menuComponent}
    <MenuContainer Component={menuComponent} on:close={closeMenu}/>
{/if}

<slot></slot>

{#if paused}
    <PauseOverlay on:click={() => closeMenu()}/>
{/if}

<svelte:window on:keydown={(e) => handleInput(e)} />

<style>
    .game {
        position: relative;
        height: 100vh;
    }
</style>