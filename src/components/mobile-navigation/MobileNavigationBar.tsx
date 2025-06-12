'use client';

import { Home, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', icon: <Home size={20} />, label: 'الرئيسية' },
  { href: '/cart', icon: <ShoppingCart size={20} />, label: 'السلة' },
  { href: '/account', icon: <User size={20} />, label: 'الحساب' },
];

const MobileNavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map(({ href, icon, label }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center text-xs ${
                active ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavigationBar;
