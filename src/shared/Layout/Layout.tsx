import React from 'react';
import { useBooksData } from '../../hooks/useBooksData';
import styles from './layout.css';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
  const  databook = useBooksData();

  return (
    <div className={styles.layout}>

      {children}

    </div>

  );
}
