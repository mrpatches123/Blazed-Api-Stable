import { system as Isystem } from "@minecraft/server";
class System {
    run(callback, ticks = 0) {
        let currentTick = 0;
        const tick = () => {
            if (currentTick++ >= ticks)
                return callback();
            Isystem.run(tick);
        };
        Isystem.run(tick);
    }
}
export const system = new System();
