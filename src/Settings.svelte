<script>
    import {gameSettings} from './stores'
    import KeyBinder from './KeyBinder.svelte'

</script>

<div>
    <h2>Opcje</h2>
    <div class="row">
        Nazwa drużyny
    </div>
    <div class="row">
        <div class="column">
            <input type="text" bind:value={$gameSettings.players[0].name} />
        </div>
        <div class="column">
            <input type="text" bind:value={$gameSettings.players[1].name} />
        </div>
    </div>
    <div class="row">
        Przypisanie klawiszy
    </div>
    <div class="row">
        <div class="column">
            <KeyBinder bind:boundKey={$gameSettings.players[0].actionKey}/>
            {$gameSettings.players[0].actionKey}
        </div>
        <div class="column">
            <KeyBinder bind:boundKey={$gameSettings.players[1].actionKey}/>
            {$gameSettings.players[1].actionKey}
        </div>
    </div>
</div>

<style>
    .row {
        display: flex;
    }

    .column {
        flex: 50%;
    }
</style>