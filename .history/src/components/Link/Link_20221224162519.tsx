import React from "react";
import { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";

type Props = {
  children: React.ReactNode;
  to: string;
};

function Link({ children, to }: Props) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
