import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import logo from '../../../public/logo.png';
import { navLinks } from '@/constants';
import SearchBar from './search/SearchBar';

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
        <div className='search-container'>
          <button
            className='search-icon'
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <Image
              src='/search-icon.svg'
              alt='Search'
              width={20}
              height={20}
            />
          </button>
          {showSearch && <SearchBar />}
        </div>
      </div>
    </nav>
  );
}