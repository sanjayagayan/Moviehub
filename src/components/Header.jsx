import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex items-center gap-4'>
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold'>
            Movie
          </span>
          <span className='text-2xl  text-black font-bold hidden sm:inline bg-[#ffa31a] py-1 px-2 rounded-md'>hub</span>
        </Link>
      </div>
      <div className='flex gap-4'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      
    </div>
  );
}

