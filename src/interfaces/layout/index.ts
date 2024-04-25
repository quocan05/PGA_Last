import React, { ReactNode } from "react";

export interface MainLayoutProps {
  children: ReactNode;
}

export interface AuthLayoutProps {
  children: ReactNode;
}

export interface HomeLayoutProps {
  children: ReactNode;
}

export interface WrapperLayoutProps {
  children: ReactNode;
}

export interface HeaderCustomProps {
  currentPage: number;
}
