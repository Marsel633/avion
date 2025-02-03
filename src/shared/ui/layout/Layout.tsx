import React from "react";
import { Container } from "../container/Container";
import { TheHeader } from "../../../widgets/header/TheHeader";
import { TheFooter } from "../../../widgets/footer/TheFooter";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <Container>{children}</Container>
      <TheFooter />
    </>
  );
};
