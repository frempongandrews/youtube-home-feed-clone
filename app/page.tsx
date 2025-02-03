import Image from "next/image";

export default function Home() {
	return (
		<div>
			<main>
				{/* content */}
				<div className="content">
					<p className="cursor-pointer">content</p>
				</div>
				{/* end content */}
				<img src="/iphone-15-mockup.png" width="300px" />
			</main>
		</div>
	);
}
