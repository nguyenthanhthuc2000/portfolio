"use client";

import { ThemeProvider } from "next-themes";
import React, { useEffect } from "react";

export default function ThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
