import Image from "next/image";
import Nav from "@/components/Nav"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
      <Nav />
      
      <section className="px-6 pt-16 pb-24">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
          <div className="md:col-span-3">
            <h1 className="text-3xl font-serif tracking-tight mb-6 font-[Lora]">About me</h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed font-[Lora] leading-7">
              <p>
                My name is Michael Genesini. I'm Italian and as per the stereotype I love pizza. Well, maybe a little bit more than the average considering I got it tattooed on my sleeve.
              </p>
              <p>
                I'm definitely an introvert (INFP-A) and I struggle to get to know new people because of it, but I really love to get meaningful mental connections with other human beings.
              </p>
              <p>
                I've been working professionally in the software industry since 2015, overlapping for some months with my master's degree in computer science engineering. In 2021 I started my journey as Engineering Manager which I fell in love with.
              </p>
              <p>
                When I'm not working, I do outdoor activities. Mainly walking and hiking on the marvelous Orobic mountains, but also bouldering and slacklining. I tend to try a lot of different hobbies because I get quickly excited about new things. To name a few: playing board games with friends, learning Arabic and Portuguese, learning Go (Weiqi), playing Djembè, tending a terrarium.
              </p>
              <p>
                I'm a super slow reader and I have a hard time keeping consistency on my reading pace. I'm trying now to schedule specific moments of my day for that, and I avoid having hard goals for "number of books" to relieve the stress of being so slow.
              </p>
              <p>
                I also struggle with keeping a personal knowledge base for the things I read. I would really love keeping a Zettelkasten but I haven't found a good workflow yet.
              </p>
              <p>I meditate every day 🧘</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <Image
              src="/profile.jpg"
              alt="Michael Genesini"
              width={900}
              height={1200}
              className="w-full h-auto rounded-md border border-black dark:border-white object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <div className="my-10 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
    </main>
  );
}
