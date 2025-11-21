'use cache: remote'

import {Suspense} from 'react';
import {fakeAwait} from '@/utils/fakeAwait';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	// await fakeAwait(2000);
  return (
     <Suspense>{children}</Suspense>
  );
}
