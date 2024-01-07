import { useEffect } from 'react';

export const useEffectAllDepsExist = (fn: () => void, deps: any[]) => {

  useEffect(() => {
    console.log('???');
    console.log(deps);
    
    if(deps.every(dep => !!dep)) {
    console.log('???///');

      return fn();
    }
  }, [deps, fn]);
};