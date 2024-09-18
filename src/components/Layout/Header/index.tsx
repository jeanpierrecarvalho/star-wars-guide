import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header
      className="flex flex-row justify-center"
      role="banner"
    >
      <Link
        href="/"
        passHref
        aria-label="Go to homepage"
      >
        <Image
          src="/images/logo.png"
          width={200}
          height={200}
          alt="Star Wars Logo"
          priority={true}
        />
      </Link>
    </header>
  )
}

export default Header
