import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import logo from '../../../public/logo.png';
import { navLinks } from '@/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setShowSearch(false);
  }, [pathname]);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link href='/' className='logo'>
          <Image src={logo} alt='Logo' />
        </Link>
        <ul className='nav-links'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}