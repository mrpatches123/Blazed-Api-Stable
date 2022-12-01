import { system } from "@minecraft/server"
class TickTimeout {
    private ticks: number
    private currentTick: number
    /**
     * Create a tick timeout
     * @param {() => void} callback Code to run after certain amount of time
     * @param {number} ticks Amount of ticks to wait until callback is
     */
    constructor(callback: () => void, ticks: number) {
        /**@private */
        this.ticks = ticks
        /**@private */
        this.currentTick = 0
        const tick = () => {
            if (ticks === -1) return
            if (this.currentTick++ >= ticks) return callback()
            system.run(tick)
        }
        system.run(tick)
    }
    getDelay() {
        return this.ticks
    }
    setDelay(tickDelay: number) {
        this.ticks = tickDelay
    }
    getCurrentDelay() {
        return this.currentTick
    }
    setCurrentDelay(tickDelay: number) {
        this.currentTick = tickDelay
    }
    resetDelay() {
        this.currentTick = 0
    }
    destroy() {
        this.ticks = -1
    }
}