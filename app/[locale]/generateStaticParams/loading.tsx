const Loading = async ({ params }: { params: { locale: string } }) => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     LOADING...
    </div>
	)
}

export default Loading;