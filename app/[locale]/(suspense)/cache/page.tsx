import { Suspense } from "react";
import { LocaleGate } from "./locale-gate";

const Home = ({ params }: { params: Promise<{ locale: string }> }) => {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
      <LocaleGate params={params} />
    </Suspense>
  );
};

export default Home;
