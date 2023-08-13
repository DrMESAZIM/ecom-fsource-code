import Image from 'next/image'
import Header from './components/hero/Header'
import Homesection  from './components/home/Homesection'
import Facility from './components/facility/Facility'
import Product from './components/product/Product'
import Sub from './components/sub/Sub'



export default function Home() {
  return (
    <main>
      <Header />
      <Homesection />
      <Facility />
      <Product />
      <Sub />
    </main>
  )
}
