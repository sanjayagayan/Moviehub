import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex bg-[#1b1b1b] text-gray-200 p-4 lg:text-lg justify-center gap-6'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  );
}
