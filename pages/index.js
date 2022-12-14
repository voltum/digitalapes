import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// Components
import Header from '../components/Header'
import Services from '../components/Services'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
// Data
import data from '../public/data.json'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Digital Apes</title>
        <meta name="description" content="CPA Whale description" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />

      <section className={styles.section_about} id={"about"}>
        <div className={styles.container}>
          <div className={styles.section_block}>
            <h2>About company</h2>
            <p>
              Agency DigitalApes is a professional team with vast experience and
              knowledge in the promotion of gaming and entertainment sites. One
              of the few companies in the Internet marketing that has
              successfully combined a competent and clear method for working
              with maximum responsibility and customer focus. DigitalApes
              projects successfully function on the network and bring earnings
              to their owners.
            </p>
          </div>
        </div>
      </section>

      <Services data={data} />

      <Contacts />

      <Footer />
    </>
  );
}
