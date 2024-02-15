import Image from 'next/image'
import styles from './page.module.css'
import { NameDate } from '../components'

// to open a page without reloading (why react was made in the first place)
// https://nextjs.org/docs/app/api-reference/components/link
import Link from 'next/link'  
import { UserWelcome } from '@/components/UserWelcome'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className='homecomponent'>
        <NameDate />
        <UserWelcome />
      </div>
    </main>
  )
}
