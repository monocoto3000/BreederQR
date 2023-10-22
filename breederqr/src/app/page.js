import styles from './page.module.css'
import Ejemplares from './pages/Ejemplares'
export default function Home() {
  return (
    <main className={styles.main}>
      <Ejemplares />
    </main>
  )
}
