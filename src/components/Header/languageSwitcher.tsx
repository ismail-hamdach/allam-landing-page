"use client";

import { useRouter, usePathname } from 'next/navigation';


// English and Arabic SVG Icons


const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Detect the current locale by checking the first part of the path
  const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';

  // Function to toggle between English and Arabic
  const switchLocale = () => {
    const newLocale = currentLocale === 'ar' ? 'en' : 'ar'; // Switch between 'ar' and 'en'
    
    // Construct the new URL by replacing the locale part in the path
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    
    // Navigate to the new URL
    router.push(newPath);
  };

  return (
    <button onClick={switchLocale} style={{ padding: '10px', margin: '10px' }}>
      <img 
        src={currentLocale === 'ar' ? '/images/icons/ar.png' : '/images/icons/en.png'} 
        alt={currentLocale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'} 
        width="24" 
        height="24" 
      />
    </button>
  );
};

export default LanguageSwitcher;
