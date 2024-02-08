"use client";

import { LayoutProvider } from "@/context/layoutcontext";
import { PrimeReactProvider } from "primereact/api";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function PrimeReactProviders({ children }: RootLayoutProps) {
  return (
    <PrimeReactProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </PrimeReactProvider>
  );
}
