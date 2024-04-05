import styles from './page.module.css'
import Simple from './components/Simple'
import SimpleWithChildren from './components/SimpleWithChildren'
import SimpleWithParam from './components/SimpleWithParam'
import Status from './components/Status'

export default function Home() {
  return (
    <main className={styles.main}>
      <Simple />

      <SimpleWithChildren>
        <h1>Quero café</h1>
      </SimpleWithChildren>

      <div className='card-container'>
        <SimpleWithParam name="Takoyaki" age={20} />
        <SimpleWithParam name="Tempura" age={10} />
      </div>

      <Status status='pending' />
      <Status status='paid' />

    </main>
  )
}
