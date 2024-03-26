import { Lusitana } from 'next/font/google';
import { Permanent_Marker } from "next/font/google"

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"]
})