import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className='hover:text-[#ffa31a]'>
      <Icon className="text-2xl sm:hidden"/>
      <p className='hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
}
