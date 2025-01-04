'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Heart, ShoppingBag, ChevronDown, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li className="relative group">
    <Link href={href} className="font-medium hover:text-[#9B111E] flex items-center">
      {children}
    </Link>
  </li>
)

const DropdownMenu = ({ items }: { items: { name: string; href: string }[] }) => (
  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
    {items.map((item) => (
      <li key={item.name}>
        <Link href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-end gap-4 bg-gray-100 px-4 py-1 text-sm">
        <Link href="/store-locator" className="flex items-center gap-1 hover:underline">
          <User className="h-4 w-4" />
          <span>Find a Store</span>
        </Link>
        <span>|</span>
        <Link href="/help" className="hover:underline">Help</Link>
        <span>|</span>
        <Link href="/join" className="hover:underline">Join Us</Link>
        <span>|</span>
        <Link href="/sign-in" className="hover:underline">Sign In</Link>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-8 py-4 border-b-2 border-[#9B111E]">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#9B111E]">
          LOGO
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <NavItem href="/new-arrivals">
              New Arrivals
              <ChevronDown className="ml-1 h-4 w-4" />
              <DropdownMenu items={[
                { name: 'Clothing', href: '/new-arrivals/clothing' },
                { name: 'Shoes', href: '/new-arrivals/shoes' },
                { name: 'Accessories', href: '/new-arrivals/accessories' },
              ]} />
            </NavItem>
            <NavItem href="/men">
              Men
              <ChevronDown className="ml-1 h-4 w-4" />
              <DropdownMenu items={[
                { name: 'Tops', href: '/men/tops' },
                { name: 'Bottoms', href: '/men/bottoms' },
                { name: 'Shoes', href: '/men/shoes' },
              ]} />
            </NavItem>
            <NavItem href="/women">
              Women
              <ChevronDown className="ml-1 h-4 w-4" />
              <DropdownMenu items={[
                { name: 'Tops', href: '/women/tops' },
                { name: 'Bottoms', href: '/women/bottoms' },
                { name: 'Shoes', href: '/women/shoes' },
              ]} />
            </NavItem>
            <NavItem href="/kids">
              Kids
              <ChevronDown className="ml-1 h-4 w-4" />
              <DropdownMenu items={[
                { name: 'Boys', href: '/kids/boys' },
                { name: 'Girls', href: '/kids/girls' },
                { name: 'Baby', href: '/kids/baby' },
              ]} />
            </NavItem>
            <NavItem href="/collections">Collections</NavItem>
            <NavItem href="/sale">Sale</NavItem>
          </ul>
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center rounded-full bg-gray-100 px-4 py-2 lg:flex">
            <Search className="h-5 w-5 text-[#9B111E]" />
            <input
              type="search"
              placeholder="Search"
              className="ml-2 bg-gray-100 outline-none placeholder:text-gray-500 focus:ring-[#9B111E] focus:border-[#9B111E]"
            />
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5 text-[#9B111E]" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5 text-[#9B111E]" />
          </Button>
        </div>
      </div>
    </header>
  )
}

