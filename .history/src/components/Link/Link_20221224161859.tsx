import React from "react";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

type Props = {
  children: React.ReactNode;
  to: string;
};

function Link({ children, to }: Props) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return <a href={to}>{children}</a>;
}

export default Link;
