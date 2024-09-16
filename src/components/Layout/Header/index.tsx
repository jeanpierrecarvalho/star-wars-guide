import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-center">
      <Link href="/" passHref>
        <Image
          src="/images/logo.png"
          width={200}
          height={200}
          alt="Star Wars Logo"
          priority={true}
        />
      </Link>
    </header>
  );
};

export default Header;
