<script>
    import Modal from "./Modal2.svelte";
    import Stage from "./Stage.svelte";
    import Background from "./Background.svelte"

    import { gameSettings } from "./stores";
</script>

<Modal>
    <Background />
    <div class="bgs">
        <div class="bgs-relative">
            <div class="leftBg">
                <div class="namePlateLeft">
                    {$gameSettings.players[0].name}
                </div>
            </div>
            <div class="rightBg">
                <div class="namePlateRight">
                    {$gameSettings.players[1].name}
                </div>
            </div>
        </div>
    </div>
    
    <Stage />
</Modal>

<style>
    :global(html) {
        background: linear-gradient(to right, #423a3a, #34363f);
        overflow: hidden;
    }

    .bgs {
        position: absolute;
        bottom: 120px;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .bgs-relative {
        position: relative;
        width: 90%;
        margin: 0 auto;
        height: 35vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .leftBg {
        position: relative;
        height: 30vh;
        width: 35%;
        background-image: url("/team.png");
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: contain;
        transform: skew(0deg, 2deg)
    }
    .rightBg {
        position: relative;
        height: 30vh;
        width: 35%;
        background-image: url("/team.png");
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: contain;
        transform: skew(0deg, -2deg)
    }

   

    .namePlateLeft {
        position: absolute;
        top: 20px;
        left: 50px;
        right: 50px;
        text-align: center;
        color: yellow;
        font-family: "Consolas";
        font-size: 1.6em;
        height: 25px;
        background-image: url('/tile.png');
        transform: skew(0deg, 1deg);
        border: 3px solid #000;
    }
    .namePlateRight {
        position: absolute;
        top: 20px;
        left: 50px;
        right: 50px;
        text-align: center;
        color: yellow;
        font-size: 1.6em;
        font-family: "Consolas";
        height: 25px;
        background-image: url('/tile.png');
        transform: skew(0deg, -1deg);
        
        border: 3px solid #000;
    }
</style>
