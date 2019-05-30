import React from "react";
import Card from "./card";

interface State {
  words: string[];
}

export default class Board extends React.Component<{}, State> {
  public state: State = {
    words: ["test", "test2"]
  };

  public render() {
    return this.state.words.map((v, i) => {
      return <Card word={v} key={i} />;
    });
  }
}
