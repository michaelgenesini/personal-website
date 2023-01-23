type Props = {
  title?: string
  description?: string
  image?: string
}

const canonical = "https://michaelgenesini.com/"

export const Meta = ({
  title = 'Michael Genesini | Engineering Manager',
  description = 'Personal website of Michael Genesini',
  image = '',
}: Props) => {
  const url = typeof window !== 'undefined' ? window.location.href : canonical

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@michaelgenesini" />
      <meta property="og:image:width" content="5000" />
      <meta property="og:image:height" content="3500" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  )
}
