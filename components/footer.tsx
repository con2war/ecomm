import Link from 'next/link'

export function Footer() {
  const links = {
    'Shop': [
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Men', href: '/men' },
      { name: 'Women', href: '/women' },
      { name: 'Kids', href: '/kids' },
      { name: 'Collections', href: '/collections' },
      { name: 'Sale', href: '/sale' },
    ],
    'Customer Service': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/shipping-returns' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'FAQs', href: '/faqs' },
    ],
    'About Us': [
      { name: 'Our Story', href: '/our-story' },
      { name: 'Careers', href: '/careers' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Press', href: '/press' },
    ],
    'Legal': [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
  }

  return (
    <footer className="bg-gray-900 px-4 py-12 text-white border-t-4 border-[#9B111E]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-32 text-[#9B111E]/10 transform -translate-y-12 rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 font-bold">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-[#9B111E]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Venture IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

