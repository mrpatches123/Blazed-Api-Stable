export declare class EventCreator<T = any> {
    private callbacks;
    private id;
    subscribe(callback: (data: T) => void): (data: T) => void;
    unsubscribe(event: (data: T) => void): void;
    protected emit(data: T): void;
}
