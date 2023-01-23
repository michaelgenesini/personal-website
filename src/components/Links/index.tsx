import Link from 'next/link';
import styled from 'styled-components'
import { useRouter } from "next/router";
import { fontSans } from 'src/components/GlobalStyles';

const Ul = styled.ul<{ isHero: boolean }>`
  ${fontSans.style}

  position: relative;
  list-style: none;
  display: flex;
  margin: 0 auto;
  width: 100%;
  overflow-x: scroll;
  justify-content: center;
  padding: 0 16px;

  &::-webkit-scrollbar{
    display: none;
  }

  &:after {
    content: '';
    position: fixed;
    height: 100%;
    width: 30px;
    background: rgb(var(--background-rgb));
    background: linear-gradient(90deg, rgba(var(--background-rgb),0) 0%, rgba(var(--background-rgb),1) 35%);
    right: 0;
    top: 0;
    pointer-events: none;
    display: none;
  }

  @media screen and (max-width: 800px) {
    &:after {
      display: block;
    }
  }

  ${({ isHero }) => isHero ? `
    flex-wrap: wrap;
  ` : `
    flex-wrap: nowrap;

    @media screen and (max-width: 800px) {
      justify-content: flex-start;
    }
  `};
`

const Li = styled.li`
  position: relative;
  padding: 0 8px 16px;
  flex-shrink: 0;

  &.active:after {
    position: absolute;
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(var(--foreground-rgb));
    left: 50%;
    transform: translateY(-50%);
    bottom: 4px;
  }

  a {
    color: inherit;
  }
`

const isActive = (route: string, currentRoute: string) => currentRoute === route ? 'active' : ''

export const Links = ({ isHero = false }: { isHero?: boolean }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Ul isHero={isHero}>
      <Li className={isActive('/about', currentRoute)}><Link href="/about">About</Link></Li>
      <Li className={isActive('/contact', currentRoute)}><Link href="/contact">Contact</Link></Li>
      <Li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Writing</a></Li>
      <Li className={isActive('/reading', currentRoute)}><Link href="/reading">Reading</Link></Li>
      <Li className={isActive('/working-with-me', currentRoute)}><Link href="/working-with-me">Working with me</Link></Li>
      <Li className={isActive('/stack', currentRoute)}><Link href="/stack">Stack</Link></Li>
      <Li className={isActive('/now', currentRoute)}><Link href="/now">Now</Link></Li>
    </Ul>
  )
}
