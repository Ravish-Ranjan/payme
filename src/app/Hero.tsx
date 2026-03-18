export default function Hero() {
	return (
		<section className="w-full bg-linear-to-b from-slate-50 to-slate-100 py-12 md:py-20 px-4">
			<div className="mx-auto max-w-4xl text-center">
				<div className="mb-6 inline-block">
					<span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
						Instant UPI Payment Links
					</span>
				</div>

				<h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
					Get Paid Instantly
					<br />
					<span className="bg-linear-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
						Share Your Payment Link
					</span>
				</h1>

				<p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 md:text-xl">
					Generate UPI payment links in seconds. Share them with
					anyone, anywhere. No setup required, no commissions, just
					simple peer-to-peer payments.
				</p>

				<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<a
						href="#form"
						className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-8 py-3 font-medium text-white transition-colors hover:bg-slate-700 active:bg-slate-800"
					>
						Create Your Link Now
					</a>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="rounded-lg bg-white p-6 shadow-sm">
						<div className="mb-3 flex justify-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xl">
								⚡
							</div>
						</div>
						<h3 className="mb-2 font-semibold text-slate-900">
							Lightning Fast
						</h3>
						<p className="text-sm text-slate-600">
							Generate payment links instantly and share them in
							seconds.
						</p>
					</div>

					<div className="rounded-lg bg-white p-6 shadow-sm">
						<div className="mb-3 flex justify-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xl">
								🔒
							</div>
						</div>
						<h3 className="mb-2 font-semibold text-slate-900">
							Secure & Private
						</h3>
						<p className="text-sm text-slate-600">
							Your UPI ID and transaction details are always
							protected.
						</p>
					</div>

					<div className="rounded-lg bg-white p-6 shadow-sm">
						<div className="mb-3 flex justify-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xl">
								📱
							</div>
						</div>
						<h3 className="mb-2 font-semibold text-slate-900">
							Works Everywhere
						</h3>
						<p className="text-sm text-slate-600">
							Works on mobile, desktop, and all major UPI apps.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
