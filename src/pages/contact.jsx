import Head from 'next/head';
import styles from '/src/styles/Home.module.css';
import { Header } from '/src/components/Header';
import { Main } from '/src/components/Main';
import { Footer } from '/src/components/Footer';
import { CurrentPage } from '/src/components/CurrentPage';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <CurrentPage pageName='Contact' />
      <Main />
      <Footer />
    </div>
  );
}