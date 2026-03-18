"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, FormEvent, useState } from "react";

type InputProps = {
	type: string;
	label: string;
	placeholder: string;
	required?: boolean;
	value: string | number;
	min?: number;
	onChange?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
};

function Input({
	type,
	label,
	placeholder,
	value,
	onChange,
	min,
	required = false,
}: InputProps) {
	return (
		<label className="flex flex-col gap-2">
			<span className="text-sm font-medium text-gray-700">{label}</span>
			<input
				type={type}
				placeholder={placeholder}
				required={required}
				value={value}
				onChange={onChange}
				min={min}
				step={0.01}
				className="px-2 py-1.5 w-full bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
			/>
		</label>
	);
}

function Form() {
	const [form, setForm] = useState({
		pa: "",
		pn: "",
		am: "",
		tn: "",
	});
	const [pageUrl, setPageUrl] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newParams = new URLSearchParams(searchParams.toString());

		if (form.pa.trim() === "") {
			window.alert("UPI id is required.");
			return;
		}
		newParams.set("pa", form.pa);

		if (form.pn.trim() !== "") newParams.set("pn", form.pn);

		if (Number(form.am) < 0) {
			window.alert("Amount can't be negative.");
			return;
		}

		if (Number(form.am) > 0) newParams.set("am", form.am.toString());

		if (form.tn.trim() !== "") newParams.set("tn", form.tn);

		setPageUrl(`?${newParams.toString()}`);
	};
	return (
		<form
			onSubmit={handleSubmit}
            id="form"
			className="grid gap-6 p-6 rounded-xl shadow-lg border border-gray-200 md:min-w-md max-w-11/12 bg-white"
		>
			<div>
				<h1 className="text-3xl font-bold text-gray-900">
					Generate your page
				</h1>
				<p className="text-gray-600 mt-1">
					Enter your details to generate your payment page
				</p>
			</div>
			<div className="space-y-4">
				<Input
					label="UPI Id"
					type="text"
					required
					placeholder="Enter you UPI id"
					value={form.pa}
					onChange={(e) => setForm({ ...form, pa: e.target.value })}
				/>
				<Input
					label="Name"
					type="text"
					placeholder="Enter your name (optional)"
					value={form.pn}
					onChange={(e) => setForm({ ...form, pn: e.target.value })}
				/>
				<Input
					label="Amount"
					type="number"
					placeholder="Enter payment amount (optional)"
					value={form.am}
					onChange={(e) => setForm({ ...form, am: e.target.value })}
					min={0}
				/>
				<Input
					label="Note"
					type="text"
					placeholder="Enter note for the payment (optinal)"
					value={form.tn}
					onChange={(e) => setForm({ ...form, tn: e.target.value })}
				/>
			</div>
			<button
				type="submit"
				className="mt-2 bg-slate-600 hover:bg-slate-700 active:bg-slate-800 p-3 text-white font-medium rounded-lg transition-colors"
			>
				Create Your Page
			</button>
			{pageUrl.trim() !== "" && (
				<div className="grid gap-4 mt-6 pt-6 border-t border-gray-200">
					<div className="space-y-2">
						<span className="text-sm text-gray-600">
							Your page:
						</span>
						<Link
							href={pageUrl}
							className="block text-slate-600 hover:text-slate-700 break-all text-sm"
						>
							{window.location.href}
							{pageUrl}
						</Link>
					</div>
					<div className="flex w-full gap-3">
						<button
							className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-colors"
							onClick={() => {
								window.navigator.clipboard.writeText(pageUrl);
								window.alert("Link copied to clipboard!");
							}}
						>
							Copy
						</button>
						<button
							className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-colors"
							onClick={() => {
								if (navigator.share) {
									navigator.share({
										title: "PayMe",
										text: "Pay me using this link",
										url: pageUrl,
									});
								}
							}}
						>
							Share
						</button>
						<button
							className="flex-1 bg-slate-600 hover:bg-slate-700 active:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
							onClick={() => {
								router.push(pageUrl);
							}}
						>
							Open
						</button>
					</div>
				</div>
			)}
		</form>
	);
}

export default Form;
