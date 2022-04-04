import { onMount, getContext } from 'svelte';

export const renderable = (draw) => {
    const {register, unregister} = getContext('a');
    
    const component = {
        mounted: false,
        render: draw
    };
    
    register(component);
    onMount(() => {
        component.mounted = true;
        
        return () => {
            unregister(component);
        }
    });
}
