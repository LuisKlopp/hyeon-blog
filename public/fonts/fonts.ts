import localFont from "next/font/local";

export const dovemayo = localFont({
  src: "Dovemayo_gothic.woff2",
  variable: "--font-dovemayo",
});

export const kyobo = localFont({
  src: "KyoboHandwriting2019.otf",
  variable: "--font-kyobo",
});

export const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Pretendard-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Pretendard-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Pretendard-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Pretendard-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});
