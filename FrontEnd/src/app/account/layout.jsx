"use client"

import { useAuth } from '@/Auth/AuthContext';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const AccountLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  const linkClasses = (href) =>
    `inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 sm:text-base whitespace-nowrap cursor-base focus:outline-none ${
      pathname === href ? 'border-blue-500 text-blue-600' : 'border-transparent hover:border-gray-400'
    }`;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    router.push('/login');
    return null; // Return null to avoid rendering the layout while redirecting
  }

  return (
    <>
      <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap py-14 justify-center gap-5">
        <Link href="/account/home" className={linkClasses('/account/home')}>Home</Link>
        <Link href="/account/profile" className={linkClasses('/account/profile')}>Profile</Link>
        <Link href="/account/upload-blog" className={linkClasses('/account/upload-blog')}>Upload Blog</Link>
        <Link href="/account/your-blogs" className={linkClasses('/account/your-blogs')}>Your Blogs</Link>
      </div>
      <div>{children}</div>
    </>
  );
};

export default AccountLayout;
