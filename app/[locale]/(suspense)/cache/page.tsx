import { CachedPage } from "./cached-page";

// One sentinel entry (Cache Components requires >= 1). Every other slug is
// generated on-demand on first request and then cached as static (ISR).
export function generateStaticParams() {
  return [{ locale: "en" }];
}

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  return <CachedPage locale={locale} />;
};

export default Home;
