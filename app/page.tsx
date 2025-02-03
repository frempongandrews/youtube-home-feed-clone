import Image from "next/image";

export default function Home() {
	return (
		<div>
			<main>
				{/* content */}
				<div className="content">
					<a href="/">content</a>
				</div>
				{/* end content */}
				<img src="/iphone-15-mockup.png" width="300px" />
			</main>
		</div>
	);
}
