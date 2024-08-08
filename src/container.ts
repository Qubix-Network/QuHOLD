export type Subscriber<T> = (value: T) => void;

export class Hold<T> {
  private value: T;
  private subscribers: Set<Subscriber<T>> = new Set();

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    if (this.value !== newValue) {
      this.value = newValue;
      this.notifySubscribers();
    }
  }

  subscribe(subscriber: Subscriber<T>): () => void {
    this.subscribers.add(subscriber);
    return () => this.subscribers.delete(subscriber);
  }

  private notifySubscribers(): void {
    this.subscribers.forEach((subscriber) => subscriber(this.value));
  }
}
