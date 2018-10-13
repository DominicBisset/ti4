import { Store } from 'svelte/store.js'

export class AsyncStore extends Store{
    async load(url, property){
        console.log("started loading data:",url);
        let response = await fetch(url);
        let data = await response.json();
        console.log("loaded data:", data[property]);
        this.set({ 
            [property]: data[property]
        });
    }
}