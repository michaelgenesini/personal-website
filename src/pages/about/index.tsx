import Head from 'next/head'
import { Lora } from '@next/font/google'
import { Meta } from 'src/components/Meta'
import { PageContent } from 'src/components/PageContent'

const font = Lora({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <PageContent>
        <h1>About me</h1>

        <p>My name is Michael Genesini. I&apos;m Italian and as per the stereotype I love pizza. Well, maybe a little bit more than the average considering I got it tattooed on my sleeve.</p>

        <p>I&apos;m definitely an introvert (INFP-A) and I struggle to get to know new people because of it, but I really love to get meaningful mental connections with other human beings.</p>

        <p>I&apos;ve been working professionally in the software industry since 2015, overlapping for some months with my master&apos;s degree in computer science engineering. In 2021 I started my journey as Engineering Manager which I fell in love with 😍</p>

        <p>When I&apos;m not working, I do outdoor activities. Mainly walking and hiking on the marvelous Orobie mountains, but also bouldering and slacklining. I tend to try a lot of different hobbies because I get quickly excited about new things. To name a few: playing board games with friends, learning Arabic and Portuguese, learning Go (Weiqi), playing Djembè, tending a terrarium.</p>

        <p>I&apos;m a super slow reader and I have a hard time keeping consistency on my reading pace. I&apos;m trying now to schedule specific moment of my day for that, and I avoid having hard goals for &quot;number of books&quot; to relieve the stress of being so slow.</p>

        <p>I also struggle with keeping a personal knowledge base for the things I read. I would really love keeping a Zettelkasten but I haven&apos;t found a good workflow yet.</p>

        <p>I meditate every day 🧘</p>
      </PageContent>
    </>
  )
}
