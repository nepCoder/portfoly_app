'use client';
import { capitalize } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const AppBarTitle = () => {
  const currentLocation = usePathname();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (currentLocation) {
      var arr = currentLocation.split('/');
      var title = `${arr[2] ? capitalize(arr[2]) : ''}  ${capitalize(arr[1])}`
      setTitle(title);
    }
  }, [currentLocation]);

  const capitalize = (str: string) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <span>{title}</span>
  )
}

export default AppBarTitle
