import { IconType } from "react-icons";

export interface IAllProductsBtn
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: number;
  dark?: boolean;
}

export interface IAboutBrandItemProps {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export interface IPrimaryButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: number;
  dark?: boolean;
  to: string;
}

export interface IContainerProps {
  children: React.ReactNode;
}

export interface ILayoutProps {
  children: React.ReactNode;
}
