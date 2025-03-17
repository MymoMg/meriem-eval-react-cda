import styles from "./HomePage.module.css"
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

export default function HomePage() {
    return (
      <>
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    );
  }