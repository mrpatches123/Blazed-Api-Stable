export class EventCreator<T = any> {
    protected callbacks: Array<(data: T) => void> = []
    protected id = 0
    subscribe(callback: (data: T) => void): (data: T) => void {
        //@ts-ignore
        callback["id"] = this.id++
        this.callbacks.push(callback)
        return callback
    }
    unsubscribe(event: (data: T) => void): void {
        //@ts-ignore
        const index = this.callbacks.findIndex(e => e["id"] === event["id"])
        if (index === -1) return
        this.callbacks.splice(index, 1)
    }
    protected emit(data: T): void {
        this.callbacks.forEach(callback => callback(data))
    }
}