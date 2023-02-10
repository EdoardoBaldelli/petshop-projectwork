import React from "react";

type Props = {
  children: JSX.Element;
};

export const Card = (props: Props) => {
  <div className="card">{props.children}</div>;
};
