'use client';

import Image from 'next/image';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { Sun } from 'lucide-react';
import { MENU } from './sidebar.data';
import cn from 'clsx';
import { usePathname } from 'next/navigation';

const isLoggedIn = false;

export function Sidebar() {
  const pathName = usePathname();

  return (
    <>
      {isLoggedIn && (
        <div className={styles.sidebar}>
          <Image src="/logo.svg" priority alt="logo" width={45} height={45} />
          <div>
            {MENU.map((MenuItem) => (
              <Link
                href={MenuItem.url}
                key={MenuItem.url}
                className={cn({
                  [styles.active]: pathName === MenuItem.url,
                })}
              >
                <MenuItem.icon size={27} />
              </Link>
            ))}
          </div>
          <Sun size={35} />
        </div>
      )}
    </>
  );
}
