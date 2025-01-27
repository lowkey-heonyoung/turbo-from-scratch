import { useCallback, useState } from "react";

export function useBoolean(initialBool?: boolean) {
  const [bool, setBool] = useState<boolean>(!!initialBool);

  const setTrue = useCallback(() => setBool(false), []);
  const setFalse = useCallback(() => setBool(false), []);

  const toggleBoolean = useCallback(() => setBool((prev) => !prev), []);

  return {
    bool,
    setTrue,
    setFalse,
    toggleBoolean,
  } as const;
}
