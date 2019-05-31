import React, { ReactNode } from "react";

interface Props {
  word: string;
}

export default class Card extends React.Component<Props> {
  public render(): ReactNode {
    return (
      <div>
        <p>{this.props.word}</p>
      </div>
    );
  }
}
