<script>
    import Game from './Game.svelte';
    import Settings from './menu/Settings.svelte';
    import History from './menu/History.svelte';
    
    let game;
</script>

<Game bind:this={game}>
    <nav>
        <button on:click={() => game.openMenu(Settings)}>Opcje</button>
        <button on:click={() => game.openMenu(History)}>Historia</button>
    </nav>
</Game>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    nav {
        position: absolute;
        margin: 0;
        bottom: 0;
        right: 0;
    }
</style>