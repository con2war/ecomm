import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { Categories } from '@/components/categories'
import { FeaturedCollections } from '@/components/featured-collections'
import { Newsletter } from '@/components/newsletter'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <FeaturedCollections />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

