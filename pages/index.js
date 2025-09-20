import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rustamjonovich Technical Services — Reliable repairs & installations</title>
        <meta name="description" content="Rustamjonovich Technical Services — electrical repairs, appliance maintenance, home network setup. Fast response, honest prices." />
        <meta property="og:title" content="Rustamjonovich Technical Services" />
        <meta property="og:description" content="Electrical repairs, appliance maintenance, home network setup. Fast, reliable, local." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <div className="max-w-5xl mx-auto px-6">
        <Header />
        <main className="mt-6">
          <Hero />
          <section className="mt-10">
            <ServicesGrid />
          </section>
          <section className="mt-10">
            <About />
          </section>
          <section className="mt-10">
            <ContactForm />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
