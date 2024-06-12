'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={` ${
          genre === param
            ? 'text-black bg-amber-500 p-5 font-semibold '
            : 'hover:bg-black hover:text-white p-5 '
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
