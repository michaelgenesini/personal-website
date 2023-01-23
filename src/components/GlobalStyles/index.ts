import { createGlobalStyle } from "styled-components";
import { Fira_Sans, Lora } from "@next/font/google";

export const fontSans = Fira_Sans({ weight: "600", subsets: ["latin"] });
export const fontSerif = Lora({ subsets: ["latin"] });

export const GlobalStyles = createGlobalStyle`
  :root {
    --foreground-rgb: 0, 0, 0;
    --anchor-rgb: 173, 106, 96;
    --background-rgb: 255, 255, 255;

    /* Palette from profile picture */
    --grullo: 161, 150, 140;
    --umber: 115, 98, 92;
    --timberwolf: 228, 221, 214;
    --redwood: 207, 141, 128;
    --linen: 236, 226, 217;
    --light-gray: 213, 212, 210;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-rgb: 0, 0, 0;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #__next {
    height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: rgb(var(--background-rgb));
    font-size: 16px;
    ${fontSerif.style}
  }

  a {
    color: rgb(var(--redwood));
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1 {
    font-size: 2em;
    font-weight: 100;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 100;
  }

  h3 {
    font-size: 1.3em;
    font-weight: 100;
  }

  p {
    line-height: 1.7em;
    margin: 1em 0;
  }

  ul {
    margin-left: 16px;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;
