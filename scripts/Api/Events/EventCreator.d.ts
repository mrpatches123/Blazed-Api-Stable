export declare class EventCreator<T = any> {
    protected callbacks: Array<(data: T) => void>;
    protected id: number;
    subscribe(callback: (data: T) => void): (data: T) => void;
    unsubscribe(event: (data: T) => void): void;
    protected emit(data: T): void;
}
