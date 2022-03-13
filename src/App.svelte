<script>
    import Modal from "./Modal2.svelte";
    import Stage from "./Stage.svelte";

    import { gameSettings } from "./stores";
</script>

<Modal>
    <div class="bg">
        <div class="strips">
            <div class="leftStrip" />
            <div class="rightStrip" />
        </div>
        <div class="bgs">
            <div class="bgs-relative">
                <div class="teams">
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
        </div>
    </div>
    
    <Stage />
</Modal>

<style>
    :global(html) {
        background: linear-gradient(to right, #423a3a, #34363f);
        overflow: hidden;
    }

    .strips {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .leftStrip {
        height: 60vh;
        width: 43%;
        background: linear-gradient(#ce4a5d, #ff4a60);
        transform: skew(-20deg, 5deg);
        border: 20px solid #ffc5cc;
        border-radius: 10px;
    }

    .rightStrip {
        height: 60vh;
        width: 43%;
        background: linear-gradient(#6378ff, #7d8fff);
        transform: skew(20deg, -5deg);
        border: 20px solid #c6ceff;
        border-radius: 10px;
        margin-left: 230px;
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

    .teams {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
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

    .bgs-relative {
        position: relative;
        width: 90%;
        margin: 0 auto;
        height: 35vh;
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
