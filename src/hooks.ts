import { useEffect, useState } from "react";
import { Hold } from "./container";

export function createHold<T>(initialValue: T): Hold<T> {
  return new Hold<T>(initialValue);
}

export function useHold<T>(hold: Hold<T>): [T, (newValue: T) => void] {
  const [value, setValue] = useState(hold.getValue());

  useEffect(() => {
    const unsubscribe = hold.subscribe(setValue);
    return unsubscribe;
  }, [hold]);

  const setHoldValue = (newValue: T) => hold.setValue(newValue);

  return [value, setHoldValue];
}
