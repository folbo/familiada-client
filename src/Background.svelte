<div class="strips">
    <div class="leftStrip" />
    <div class="rightStrip" />
</div>

<style>
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
</style>