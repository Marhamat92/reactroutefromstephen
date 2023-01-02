import React from "react";

type Props = {
  children: React.ReactNode;
};

function Link({ children }: Props) {
  return <a href=''>{children}</a>;
}

export default Link;
