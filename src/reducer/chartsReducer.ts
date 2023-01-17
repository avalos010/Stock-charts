export function chartsReducer(state: State, action: Action) {
  switch (action.type) {
    case "add_to_faves": {
      return {
        ...state,
        savedCharts: [
          { data: action.payload.data, name: action.payload.symbol },
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
  }[];
}

export interface Action {
  type?: "add_to_faves" | "remove_from_saved" | "clear_faves";
  payload?: any; //TODO: type this
}
