import Link from "next/link";
import Form from "./Form";
import Info from "./Info";
import Footer from "./Footer";
import Hero from "./Hero";

type PageProps = {
	searchParams?: Promise<{
		pa?: string;
	}>;
};

function Topbar({ pa }: { pa?: string }) {
	return (
		<header className="w-full border-b border-slate-300 bg-white/80 backdrop-blur">
			<div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-4">
				<Link href={"/"}>
					<h1 className="text-base font-semibold text-slate-900">
						PayMe
					</h1>
				</Link>
				<p className="text-sm text-slate-600">
					{pa ? `Account: ${pa}` : "Create payment profile"}
				</p>
			</div>
		</header>
	);
}

async function page({ searchParams }: PageProps) {
	const params = await searchParams;
	const pa = params?.pa;
	return (
		<div className="flex flex-col gap-4 w-full min-h-dvh bg-slate-200">
			<Topbar pa={pa} />
			{!pa && <Hero />}
			<main className="flex flex-col items-center flex-1">
				{!pa && <Form />}
				{pa && <Info />}
			</main>
			<Footer />
		</div>
	);
}

export default page;
