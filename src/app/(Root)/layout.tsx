import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      navbar
      {children}
      footer
    </>
  );
};

export default layout;
