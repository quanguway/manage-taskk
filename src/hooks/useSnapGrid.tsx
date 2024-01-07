import { useMemo } from 'react';
import type { Modifier } from '@dnd-kit/core';


export const useSnapGrid = (gridSize: number) => {
  const createSnapModifier = (gridSize: number): Modifier => ({ transform }) => ({
    ...transform,
    x: Math.ceil(transform.x / gridSize) * gridSize,
    y: Math.ceil(transform.y / gridSize) * gridSize,
  });

  const snapGrid = useMemo(() => createSnapModifier(gridSize), [gridSize]);
  return snapGrid;
};