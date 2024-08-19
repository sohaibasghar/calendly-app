import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/people/person1">Person 1</Link>
        </li>
        <li>
          <Link href="/people/person2">Person 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
