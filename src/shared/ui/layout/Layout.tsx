import React from "react";
import { Container } from "../container/Container";
import { TheHeader } from "../../../widgets/header/TheHeader";
import { TheFooter } from "../../../widgets/footer/TheFooter";
import { ILayoutProps } from "../../types/types";

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <Container>{children}</Container>
      <TheFooter />
    </>
  );
};
