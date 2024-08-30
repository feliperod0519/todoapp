import { createAction } from "@ngrx/store";

export type FilterTypes = 'all' | 'completed' | 'pending';

export const setFilter = createAction('[Filter] Set Filter', (filter: FilterTypes) => ({ filter }));


