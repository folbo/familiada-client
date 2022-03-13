<script>
    export let boundKey;
    
    let checked = false;
    
    function handleClick(event) {
        const registerKey = function () {
            const a = function (event) {
                boundKey = event.code;
                document.removeEventListener("keypress", a);
                checked = false;
            }
            return a;
        }

        if (!checked) {
            checked = true;
            document.addEventListener("keypress", registerKey());
        }
    }
</script>

<input type=checkbox bind:checked={checked} on:click={handleClick}>