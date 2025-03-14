import { Bitter, Fredericka_the_Great } from "next/font/google";

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