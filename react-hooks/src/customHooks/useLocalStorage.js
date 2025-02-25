import { useDebugValue, useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  let savedValue = localStorage.getItem(key);
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useDebugValue(value); // hook used to better describe the custom hook and it can only be used inside custom hook

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
}
