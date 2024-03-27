'use client'
import Image from 'next/image'
import styles from '@/app/ui/home.module.css';
import Status from './ui/Status';
import Simple from './ui/Simple';
import SimpleWithChildren from './ui/SimpleWithChildren';
import { lusitana } from './ui/fonts';


export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <h1 className="text-blue-500">I&apos;m blue!</h1>


      <Simple />

      <SimpleWithChildren>
        Olá mundo
      </SimpleWithChildren>

      <div
        className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-green-300 border-l-transparent border-r-transparent"
      />
      <div className={styles.arrow_up} />

      <div>
        <Status status='pending' >
          Alguma coisa
        </Status>
        <Status status='paid' />
      </div>

      <div>
        <p className={'text-3xl text-white'}>Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.</p>
        <p
          className={`${lusitana.className} text-3xl text-white`}
        >Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.</p>
      </div>

      <div>
        <Image
          src="/isis.png"
          width={490}
          height={639}
          className="hidden md:block"
          alt="Cachorro"
        />
        <Image
          src="/apolo.png"
          width={431}
          height={512}
          className="block md:hidden"
          alt="Gato"
        />


      </div>

    </main>
  )
}
