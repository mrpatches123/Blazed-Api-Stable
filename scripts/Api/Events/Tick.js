import { system } from "@minecraft/server";
import { EventCreator } from "./EventCreator";
export class TickEventSignal extends EventCreator {
    constructor() {
        super();
        const tick = () => {
            this.emit();
            system.run(tick);
        };
        system.run(tick);
    }
}
