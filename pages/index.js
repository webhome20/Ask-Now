import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ASK NOW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Contact AOL Customer Help & Service " />
        <p className="AOL Phone Number +1-877-594-0810">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
d
