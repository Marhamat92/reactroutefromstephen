import React from "react";
import { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  to: string;
};

function Link({ children, to }: Props) {
  const { navigate, currentPath } = useContext(NavigationContext);
  const isActive = currentPath === to;

  const linkClasses = classNames(
    "text-2xl font-bold flex flex-col",
    isActive && "text-green-500"
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={linkClasses} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
