<script>
	import * as svelte from 'svelte'
	import Player from './Player.svelte'
	import Settings from './Settings.svelte'
    import {gameSettings, history} from './stores'

	const { open } = svelte.getContext('simple-modal');

    const showSettings = () => {
        open(Settings);
    }

    let currentGame;

    const resetGame = () => {
        currentGame = ['idle', 'idle'];
    }

    const addMatchToHistory = () => {
        history.update(h => [
            ...h, 
            {
                game: currentGame,
                settings: $gameSettings
            }
        ]);
    }

    const handleKeydown = (event) => {
        if (currentGame.some(x => x !== 'idle')) {
            return;
        }

        var winnerIndex = $gameSettings.players.findIndex(x => x.actionKey === event.code);
        if(winnerIndex !== -1) {
            currentGame[winnerIndex] = 'winner';
            addMatchToHistory();

            setTimeout(resetGame, 1000);
        } //background: radial-gradient(#fafafa, #afafaf);
    }

    resetGame();
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="game">
    <Player name={$gameSettings.players[0].name} state={currentGame[0]} theme={$gameSettings.players[0].style}/>
    <button on:click={showSettings}>Opcje</button>
    <Player name={$gameSettings.players[1].name} state={currentGame[1]} theme={$gameSettings.players[1].style}/>
</div>
<div class="menu">
    
</div>

<style>
    .game {
        position: absolute;
        top: 60px;
        bottom: 40px;
        left: 0;
        right: 0;
        display: flex;
        border: double 50px transparent;
        border-radius: 280px;
        background-image: url('/stage.png');
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: contain;
        width: 20%;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 0 auto;
    }
</style>