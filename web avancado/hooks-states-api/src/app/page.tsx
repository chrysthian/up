import styles from "./page.module.css"
import StateCount from "./components/stateCount"
import { HookCount, HookCountEffect } from "./components/hookCount"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.divContainer}>
        <h1>useState</h1>
        <div className={styles.componentContainer}>
          <HookCount />
          <HookCount />
        </div>
      </div>

      <div className={styles.divContainer}>
        <h1>useState + useEffect</h1>
        <div className={styles.componentContainer}>
          <HookCountEffect />
          <HookCountEffect />
        </div>
      </div>

      <div className={styles.divContainer}>
        <h1>zustand</h1>
        <div className={styles.componentContainer}>
          <StateCount />
          <StateCount />
        </div>
      </div>
    </main>
  )
}
