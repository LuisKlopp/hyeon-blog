import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";
import type { Metadata } from "next";

import {
  dovemayo,
  kyobo,
  pretendard,
} from "@/public/fonts/fonts";
import MainLayout from "@/components/main-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.className} ${dovemayo.variable} ${kyobo.variable} bg-blogBackground dark:bg-blogBackgroundBlack transition`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="blog-theme"
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "RyuHyeon | Frontend Engineer",
  description: "RyuHyeon의 블로그입니다.",
};
