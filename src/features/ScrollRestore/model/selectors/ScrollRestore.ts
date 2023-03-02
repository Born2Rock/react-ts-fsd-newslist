import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollRestore = (state: StateSchema) =>
  state?.scrollRestore.scroll;
export const getScrollRestoreByPath = createSelector(
  getScrollRestore,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path as string] || 0,
);
