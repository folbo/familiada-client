<script>
    import { history } from '../store';
</script>

<div style="height: 100vh">
    <p>
        Historia
    </p>
    {#each $history as entry}
        <div>
            {entry}
        </div>
    {/each}
</div>