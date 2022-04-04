import { writable, derived } from 'svelte/store';

export const context = writable();
export const width = writable(window.innerWidth);
export const height = writable(window.innerHeight);
export const pixelRatio = writable(window.devicePixelRatio);

export const props = derived([context, width, height],
    ([$context, $width, $height]) => ({
        ctx: $context, 
        width: $width,
        height: $height
    }));

export const gameSettings = writable({
    players: {
        left: {
            name: "RODZINA 1",
            actionKey: 'Backquote',
            style: {
                mainColor: "#f00226",
                inactiveColor: "#8a0e17",
                activeColor: "#f00226",
            }
        }, 
        right: {
            name: "RODZINA 2",
            actionKey: 'NumpadSubtract',
            style: {
                mainColor: "#0739fa",
                inactiveColor: "#181270",
                activeColor: "#0739fa",
            }
        }
    }
});

export const history = writable([]);