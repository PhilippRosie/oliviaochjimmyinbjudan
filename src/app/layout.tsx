import "./globals.css";
import Header from "./components/header/Header";
import { bitter, fredericka } from './fonts';

export const metadata = {
  title: 'Jimmy & Olivia',
  description: 'Bröllop 2025',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} ${fredericka.variable}`}>
        <div className="layout">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
