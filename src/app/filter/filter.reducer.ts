import { createReducer, on, Action } from "@ngrx/store";
import { FilterTypes } from "./filter.actions";
import { setFilter} from "./filter.actions";

export const initialState: FilterTypes = 'all' as FilterTypes;

const _filterReducer = createReducer(
    initialState,
    on(setFilter, (state, { filter }) => filter),
);

export function filterReducer(state:FilterTypes = initialState, action:Action) : FilterTypes {
    return _filterReducer(state, action);
}
