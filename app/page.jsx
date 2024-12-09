import { Companies } from '@/src/components'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <Companies />
            </div>
        </main>
    )
}
