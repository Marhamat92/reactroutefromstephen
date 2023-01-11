import React from "react";
import Link from "../Link/Link";

type Props = {};

function Sidebar({}: Props) {
  const links = [
    { to: "/dropdown", label: "Dropdown" },
    { to: "/accordion", label: "Accordion" },
    { to: "/button", label: "Button" },
    { to: "/modal", label: "Modal" },
    { to: "/table", label: "Table" },
    { to: "/counter", label: "Counter" },
    { to: "/counterwithreducer", label: "Counter with Reducer" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.to}>
        {link.label}
      </Link>
    );
  });

  return <div>{renderedLinks}</div>;
}

export default Sidebar;
