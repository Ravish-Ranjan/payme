import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full border-t border-slate-300 bg-white/80 backdrop-blur mt-auto">
			<div className="mx-auto max-w-4xl px-4 py-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					<div>
						<h3 className="font-semibold text-slate-900 mb-3">
							About
						</h3>
						<p className="text-sm text-slate-600">
							PayMe is a simple tool to generate UPI payment links
							for easy sharing and quick transactions.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-slate-900 mb-3">
							Features
						</h3>
						<ul className="space-y-2 text-sm text-slate-600">
							<li>
								<a
									href="#"
									className="hover:text-slate-900 transition-colors"
								>
									Generate Links
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-slate-900 transition-colors"
								>
									Share Easily
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-slate-900 transition-colors"
								>
									Fast Payments
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-slate-600">
						© 2026 PayMe. All rights reserved.
					</p>
					<div className="flex gap-4">
						<a
							href="https://github.com/Ravish-Ranjan/payme"
							className="text-slate-600 hover:text-slate-900 transition-colors"
							aria-label="GitHub"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
