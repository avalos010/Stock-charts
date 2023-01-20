import { chartType } from "../chartType/chartType";

export function chartsReducer(state: State, action: Action) {
  switch (action.type) {
    case "add_to_saved": {
      return {
        ...state,
        savedCharts: [
          {
            data: action.payload.data,
            name: action.payload.symbol,
            type: action.payload.type,
          },
          ...state.savedCharts,
        ],
      };
    }
    case "remove_from_saved": {
      return {
        ...state,
        savedCharts: state.savedCharts.filter(
          (chart) => chart.name !== action.payload.symbol
        ),
      };
    }
    default: {
      return state;
    }
  }
}

export interface State {
  savedCharts: {
    data: [];
    name: string;
    type: chartType;
  }[];
}

export interface Action {
  type?: "add_to_saved" | "remove_from_saved" | "clear_faves";
  payload?: any; //TODO: type this
}
