import { RootProvider } from "fumadocs-ui/provider/next";
import {
  Atkinson_Hyperlegible_Mono,
  Atkinson_Hyperlegible_Next,
} from "next/font/google";
import "./global.css";

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson-sans",
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson-mono",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${atkinson.variable} ${atkinsonMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
