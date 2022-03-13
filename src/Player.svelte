<script>
    export let state;
    export let theme;

</script>

<div class="player" style="background-color: {state === 'winner' ? theme.activeColor : theme.inactiveColor}">

</div>

<style>
    .player {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 10%;
        height: 300px;
        border: 1px solid #000;
        border-radius: 10px;
    }   
</style>