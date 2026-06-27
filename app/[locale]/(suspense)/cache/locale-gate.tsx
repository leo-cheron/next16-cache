import { CachedPage } from "./cached-page";

export async function LocaleGate({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CachedPage locale={locale} />;
}
