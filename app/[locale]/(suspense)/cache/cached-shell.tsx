'use cache'

import {fakeAwait} from '@/utils/fakeAwait';
import Image from "next/image";

export async function CachedShell({children}: {children: React.ReactNode}) {
  await fakeAwait(1000);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {children}
        </div>
      </main>
    </div>
  );
}
