import { Anton, Poppins } from "next/font/google";
import localFont from "next/font/local";


const general_init = localFont({
  src: "../app/static-fonts/GeneralSans-Variable.ttf",
  variable: "--font-GeneralSans",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


const anton_init = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const poppins = poppins_init.className;

export const anton = anton_init.className;

export const general = general_init.className;
