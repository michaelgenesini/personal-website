import { Lora } from '@next/font/google'
import Link from 'next/link';
import { Links } from 'src/components/Links';
import { Logo } from 'src/components/Logo';
import styled from 'styled-components';

const font = Lora({ subsets: ['latin'] })

const Title = styled.h1`
  ${font.style}
  font-size: 3em;
  font-weight: 100;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.h2`
  ${font.style}
  font-size: 1.5em;
  font-weight: 100;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`

const LinksWrapper = styled.nav`
  display: flex;
  width: 100%;
  margin: 32px auto;
`

export const Hero = () => (
  <Wrapper>
    <Link href="/">
      <Logo />
    </Link>

    <Title>Michael Genesini</Title>
    <Subtitle>Engineering Manager</Subtitle>

    <LinksWrapper>
      <Links isHero />
    </LinksWrapper>
  </Wrapper>
)
