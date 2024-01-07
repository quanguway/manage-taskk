import { useEffect, useRef } from 'react';
import { usePrevious } from './usePrevious';

export const useEffectAllDepsChange = (fn: () => void, deps: any[]) => {
  const prevDeps = usePrevious(deps);
  const changeTarget = useRef<any[]>();

  useEffect(() => {
    // nothing to compare to yet
    if (changeTarget.current === undefined) {
      changeTarget.current = prevDeps;
    }

    // we're mounting, so call the callback
    // console.log("2", fn());
    if (changeTarget.current === undefined) {
      return fn();
    }

    // make sure every dependency has changed
    if (changeTarget.current.every((dep, i) => dep !== deps[i])) {
      changeTarget.current = deps;

      return fn();
    }
  }, [fn, prevDeps, deps]);
};