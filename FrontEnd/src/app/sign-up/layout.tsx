import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ApolloWrapper} from "../apollo/wrapper"
import { AuthProvider } from "@/Auth/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sample Blog App",
  description: "Home page",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ApolloWrapper>{children}</ApolloWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
