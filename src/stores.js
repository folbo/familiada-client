import { writable } from 'svelte/store';

export const history = writable([]);

export const gameSettings = writable({
    players: [
        {
            name: "RODZINA 1",
            actionKey: 'Backquote',
            style: {
                mainColor: "#f00226",
                inactiveColor: "#8a0e17",
                activeColor: "#f00226",
            }
        }, 
        {
            name: "RODZINA 2",
            actionKey: 'NumpadSubtract',
            style: {
                mainColor: "#0739fa",
                inactiveColor: "#181270",
                activeColor: "#0739fa",
            }
        }
    ]
})