import React from "react";
import Link from "../Link/Link";

type Props = {};

function Sidebar({}: Props) {
  const links = [
    { to: "/dropdown", label: "Dropdown" },
    { to: "/accordion", label: "Accordion" },
    { to: "/button", label: "Button" },
  ];

  const renderedLinks = links.map((link) => {
    return <Link to={link.to}>{link.label}</Link>;
  });

  return <div>{renderedLinks}</div>;
}

export default Sidebar;
