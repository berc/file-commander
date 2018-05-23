import { createSelector, createFeatureSelector } from "@ngrx/store";

import { AppState, LEFT_PANEL_ID, RIGHT_PANEL_ID } from "./reducers";

export const selectPanels = createFeatureSelector<AppState>('panels');
export const selectLeftPanel = createSelector(selectPanels, (state: any) => state.panels.left);
export const selectRightPanel = createSelector(selectPanels, (state: any) => state.panels.right);
