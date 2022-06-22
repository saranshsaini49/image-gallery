import React from "react";
import { Basic, Random } from "unsplash-js/dist/methods/photos/types";

type ImagesType = Basic[] | Random[];

// type State = { images: ImagesType[] };
interface State {
  images: ImagesType[];
}
interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

type Action = { type: "ADD_IMAGES"; payload: ImagesType };

export { State, ImagesType, Action, ContextType };
