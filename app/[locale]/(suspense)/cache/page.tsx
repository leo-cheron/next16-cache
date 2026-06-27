
import { fakeAwait } from '@/utils/fakeAwait';
import { Suspense } from "react";
import { CachedShell } from "./cached-shell";
import { LocaleHeading } from "./locale-heading";

async function DelayedComponent() {
  await fakeAwait(2000);
  return (
    <div className="text-sm p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
      I loaded after 2 seconds!
    </div>
  );
}

const Home = ({ params }: { params: Promise<{ locale: string }> }) => {
	return (
		<CachedShell>
      <Suspense fallback={<div className="text-sm text-zinc-500">Loading locale...</div>}>
        <LocaleHeading params={params} />
      </Suspense>

      <Suspense fallback={<div className="text-sm text-zinc-500">Loading suspended component...</div>}>
        <DelayedComponent />
      </Suspense>
    </CachedShell>
	)
}

export default Home;
