"use cache";

import { CachedPage } from "../../cache/cached-page";


export async function generateStaticParams() {
	return [{ locale: "en", slug: "__placeholder__" }];
}

export default async function StaticParamPage({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) {
	const { locale } = await params;
	return <CachedPage locale={locale} />;
}
