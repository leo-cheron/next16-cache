'use cache'

import { fakeAwait } from "@/utils/fakeAwait";
import Image from "next/image";

export async function CachedPage({ locale }: { locale: string }) {
  await fakeAwait(2000);

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
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            locale: {locale}
          </h1>

          <div className="text-sm p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            I loaded after 2 seconds!
          </div>
        </div>
      </main>
    </div>
  );
}
