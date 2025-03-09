import "./globals.css";
import { Bitter, Fredericka_the_Great } from "next/font/google";
import Header from './components/header/Header';

export const bitter = Bitter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-bitter',
  display: 'swap',
});

export const fredericka = Fredericka_the_Great({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fredericka',
  display: 'swap',
});

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
