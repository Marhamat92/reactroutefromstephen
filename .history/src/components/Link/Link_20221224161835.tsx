import React from "react";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

type Props = {
  children: React.ReactNode;
  to: string;
};

function Link({ children, to }: Props) {
  const { navigate } = useContext(NavigationContext);

  return <a href={to}>{children}</a>;
}

export default Link;
