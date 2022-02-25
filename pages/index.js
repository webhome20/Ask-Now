import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Web Design and Development Services" />
        <p className="">
          Whenever it's about running an online business, it's crucial to manage the website with advanced technicalities. With the web development services in Delhi, you can regulate your web pages and maintain their functionality as web developers design your business page in a way that can be accessed on any device. Ranking the web page on top of the SERP is regulated through search engine optimization techniques. At The Digital Serve, we utilize advanced optimization practices on your website to match with the standard requirements and rank on the top of SERP.


        </p>
      </main>

      <Footer />
    </div>
  )
}
