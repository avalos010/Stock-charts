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
    default: {
      return state;
    }
  }
}

interface State {
  savedCharts: [];
}

interface Action {
  type?: "add_to_faves" | "removed_from_faves" | "clear_faves";
  payload: any; //TODO: type this
}
