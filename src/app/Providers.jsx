'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className='text-white bg-black min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  );
}
