import React, { ReactNode } from "react";
import Board from "./components/board/board";

export default class App extends React.Component {
  public render(): ReactNode {
    return <Board />;
  }
}
