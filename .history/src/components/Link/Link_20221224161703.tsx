import React from "react";

type Props = {
  children: React.ReactNode;
  to: string;
};

function Link({ children, to }: Props) {
  return <a href={to}>{children}</a>;
}

export default Link;
