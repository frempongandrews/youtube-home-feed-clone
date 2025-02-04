"use client";

import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts as SiYoutubeshortsSelected } from "react-icons/si";

import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
	return (
		<div>
			<main>
				{/* content */}
				<div className="content">
					{/* header */}
					<div className="flex justify-between items-center">
						{/* left */}
						<div className="">
							<img
								draggable="false"
								src={`/icons/youtube-logo.png`}
								className="w-[80px] cursor-pointer"
							/>
						</div>

						{/* right */}
						<div className="flex items-center gap-3">
							<img
								src="/icons/youtube-dlna-icon.png"
								className="w-[30px] object-contain cursor-pointer"
								draggable="false"
							/>

							<IoNotificationsOutline className="text-[20px] cursor-pointer" />

							<FiSearch className="text-[20px] cursor-pointer" />
						</div>
					</div>
					{/* end header */}

					{/* categories */}
					<div className="flex mt-[20px] overflow-visible">
						<p>Hello</p>
						<p>There</p>
					</div>

					{/* end categories */}

					{/* feed */}
					<div>feed here</div>
					{/* end feed */}
				</div>
				{/* end content */}
				<img src="/iphone-15-mockup.png" width="300px" draggable="false" />
			</main>
		</div>
	);
}
