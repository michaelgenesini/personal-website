import { PropsWithChildren } from 'react';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { Section } from 'src/components/Section';

type Props = PropsWithChildren<{}>

export const PageContent = ({ children }: Props) => (
  <Main>
    <Header />

    <Section>
      {children}
    </Section>
  </Main>
)
