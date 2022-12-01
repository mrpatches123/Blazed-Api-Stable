export class EventCreator {
    constructor() {
        this.callbacks = [];
        this.id = 0;
    }
    subscribe(callback) {
        //@ts-ignore
        callback["id"] = this.id++;
        this.callbacks.push(callback);
        return callback;
    }
    unsubscribe(event) {
        //@ts-ignore
        const index = this.callbacks.findIndex(e => e["id"] === event["id"]);
        if (index === -1)
            return;
        this.callbacks.splice(index, 1);
    }
    emit(data) {
        this.callbacks.forEach(callback => callback(data));
    }
}
