import { createGlobalStyle } from "styled-components"
import { Fira_Sans, Lora } from "@next/font/google"

export const fontSans = Fira_Sans({ weight: "600", subsets: ["latin"] })
export const fontSerif = Lora({ subsets: ["latin"] })

export const GlobalStyles = createGlobalStyle`
  :root {
    --foreground-rgb: 0, 0, 0;
    --background-rgb: 255, 255, 255;
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
    color: inherit;
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
`
