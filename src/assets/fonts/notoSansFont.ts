import localFont from "next/font/local";

export const notoSansFont = localFont({
  src: [
    {
      path: "./NotoSans-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./NotoSans-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./NotoSans-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./NotoSans-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./NotoSans-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--primary-font"
});
