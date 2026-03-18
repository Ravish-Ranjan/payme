"use client";

import { useSearchParams } from "next/navigation";
import QRCode from "react-qr-code";
import bhim from "@/../public/icons/bhim.svg";
import gpay from "@/../public/icons/gpay.svg";
import paytm from "@/../public/icons/paytm.svg";
import Image from "next/image";

function Info() {
	const searchParams = useSearchParams();
	const info = {
		pa: searchParams.get("pa"),
		pn: searchParams.get("pn"),
		am: searchParams.get("am"),
		tn: searchParams.get("tn"),
	};

	const upiUrl =
		`upi://pay?pa=${info.pa}` +
		(info.pn ? `&pn=${info.pn}` : "") +
		(info.am ? `&am=${info.am}` : "") +
		(info.tn ? `&tn=${info.tn}` : "");

	const pay = () => {
		window.location.href = upiUrl;
	};

	return (
		<div className="grid gap-2 my-4">
			<h1 className="text-center text-2xl">Scan QR Code to pay</h1>
			<div className="p-4 rounded-2xl bg-white">
				<QRCode value={upiUrl} fgColor="#1d293d" />
			</div>
			<span className="my-4 text-center">OR</span>
			<button
				onClick={pay}
				className="bg-slate-500 p-2 text-white rounded font-semibold"
			>
				Pay with App
			</button>
			<div className="flex justify-around mt-4">
				<Image src={bhim} alt="bhim" />
				<Image src={paytm} alt="paytm" />
				<Image src={gpay} alt="gpay" />
			</div>
		</div>
	);
}

export default Info;
