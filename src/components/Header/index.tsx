import Image from 'next/image';
import { Links } from 'src/components/Links';
import Link from 'next/link';
import { Logo } from 'src/components/Logo';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: rgb(var(--background-rgb));
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(229,231,235,0.5);
`

export const Header = () => (
  <Wrapper>
    <Link href="/">
      <Logo />
    </Link>

    <Links />
  </Wrapper>
)
