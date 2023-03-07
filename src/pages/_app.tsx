import type { AppProps } from "next/app";
import { GlobalStyles } from "src/components/GlobalStyles";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5HM6ES8GQH"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5HM6ES8GQH');
        `,
        }}
      />
    </>
  );
}
