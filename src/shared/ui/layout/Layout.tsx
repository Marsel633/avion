import React from "react";
import { TheHeader } from "@widgets/header";
import { TheFooter } from "@widgets/footer";
import { ILayoutProps } from "@shared/types";
import { Container } from "../container";

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <Container>{children}</Container>
      <TheFooter />
    </>
  );
};
