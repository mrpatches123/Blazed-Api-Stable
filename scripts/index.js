import { world, system } from "./Api/index";
world.events.playerJoin.subscribe((data) => {
    console.warn(`${data.player.getName()} joined the game!`);
});
world.events.playerDeath.subscribe((data) => {
    console.warn(`${data.player.getName()} has died!`);
});
world.events.playerLeave.subscribe(data => {
    console.warn(`${data.playerName} left the game!`);
});
system.run(() => {
    console.warn("after 1 second");
}, 20);
world.scoreboard.addObjective("Money", "§aMoney");
