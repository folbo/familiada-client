<script>
    export let boundKey;
    
    let checked = false;
    let button;

    function handleClick(event) {
        if (checked) {
            return;
        }
        
        const registerKey = function (event) {
            boundKey = event.code;
            document.removeEventListener("keypress", registerKey);
            
            checked = false;
            button.disabled = false;
        }
        
        checked = true;
        button.disabled = true;
        document.addEventListener("keypress", registerKey);
    }
</script>

<button bind:this={button} on:click={handleClick} class:checked>{boundKey}</button>

<style>
    button {
        border: 3px solid #d5d6d5;
        width: 160px;
    }
    
    .checked {
        border: 3px solid rgb(244, 155, 13);
    }
</style>