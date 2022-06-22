import { Reducer, useReducer } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { Action, ImagesType, State } from "../types";

const initialState: State = { images: [[], [], [], []] };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES": {
      const images: ImagesType[] = [[], [], [], []];
      const results = action.payload;
      results.forEach((obj, index) => {
        images[index % 4].push(obj as Random);
      });

      return { ...state, images };
    }
    default:
      return state;
  }
};

const useGlobalReducer = () => {
  return useReducer(reducer, initialState);
};

export default useGlobalReducer;
