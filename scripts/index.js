import { world } from "./Api/index";
world.events.playerJoin.subscribe((data) => {
    console.warn(`${data.player.getName()} joined the world!`);
});
world.events.playerDeath.subscribe((data) => {
    console.warn(`${data.player.getName()} has died!`);
});
