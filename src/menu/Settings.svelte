<script>
    import { gameSettings } from '../store'
    import KeyBinder from '../KeyBinder.svelte'     
</script>

<div>
    <p style="text-align: center">OPCJE</p>
    <div class="row">
        <p>Nazwa drużyny</p>
    </div>
    <div class="row">
        <div class="column column-left">
            <input type="text" bind:value={$gameSettings.players.left.name} />
        </div>
        <div class="column column-right">
            <input type="text" bind:value={$gameSettings.players.right.name} />
        </div>
    </div>
    <div class="row">
        <p>Przypisanie klawiszy</p>
    </div>
    <div class="row">
        <div class="column column-left">
            <KeyBinder bind:boundKey={$gameSettings.players.left.actionKey}/>
        </div>
        <div class="column column-right">
            <KeyBinder bind:boundKey={$gameSettings.players.right.actionKey}/>
        </div>
    </div>
</div>

<style>
    .row {
        display: flex;
        justify-content: space-evenly;
        height: 100px;
    }
    
    .column {
        display: flex;
        flex: 50%;
        margin: 10px;
    }
    
    .column-left {
        justify-content: flex-end;
    }
    
    .column-right {
        justify-content: flex-start;
    }
</style>