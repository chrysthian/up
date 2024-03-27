import clsx from 'clsx';
import React from 'react';

export default function Status({ status, children }: { status: string, children?: React.ReactNode }) {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? "PENDING" : "PAID"}
      {children}
    </div>)
}