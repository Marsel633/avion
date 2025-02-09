import React from "react";
import { ILayoutProps } from "@/shared/types";
import { TheFooter, TheHeader } from "@/widgets";
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
