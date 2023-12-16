import Hero from '@/components/Hero'
import LatestPost from '@/components/LatestPost'
import NewsLetter from '@/components/NewsLetter'
import Image from 'next/image'

export default function Home() {
  return (
    <>
       <Hero/>
       <LatestPost/>
       <NewsLetter/>
    </>
  )
}
