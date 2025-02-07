"use client";

import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts as SiYoutubeshortsSelected } from "react-icons/si";
import { GoPlus } from "react-icons/go";

import { RxDotsVertical } from "react-icons/rx";

import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { posts } from "@/app/data/data";

const responsive = {
	0: {
		items: 4,
	},
};

export default function Home() {
	const renderPosts = () => {
		return posts.map((post) => {
			return (
				<div className="mt-[20px] cursor-pointer" key={post.id}>
					<div>
						<img src={post.imageUrl} draggable="false" />
					</div>

					{/* footer */}
					<div className="flex gap-[10px] mt-[10px] items-start px-[4px]">
						<img
							src={post.user.imageUrl}
							className="w-[30px] h-[30px] rounded-full relative bottom-[-4px]"
						/>
						<div className="">
							<h4 className="text-[10px] font-medium leading-tight">
								{post.title}
							</h4>
							<p className="text-[8px] text-gray-500 flex items-center gap-[4px] ">
								<span className="inline-block">{post.user.username}</span>{" "}
								<span className="inline- pb-1"> . </span>{" "}
								<span className="inline-block">{post.viewCount} views</span>{" "}
								<span className="inline-block pb-1"> . </span>
								<span className="inline-block">{post.createdAtTime}</span>
							</p>
						</div>

						<RxDotsVertical className="text-[16px]" />
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<main>
				{/* content */}
				<div className="content overflow-y-scroll scrollbar-hide">
					{/* header */}
					{/* padded inner */}
					<div className="px-[4px]">
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
					</div>
					{/* end header */}

					{/* categories */}
					<div className="mt-[12px] flex px-[4px]">
						<AliceCarousel
							disableDotsControls
							disableButtonsControls
							responsive={responsive}
							mouseTracking
						>
							<p className="mr-[12px] relative bottom-[-6px] px-[4px] bg-gray-100/95 rounded-md cursor-pointer">
								<MdOutlineExplore className="text-[20px]" />
							</p>
							<p className="mr-[6px] text-[12px] relative bottom-[-2px] bg-black text-white rounded-md px-[10px] h-[100%] pt-[6px] cursor-pointer">
								All
							</p>
							<p className="mr-[6px] text-[10px] relative bottom-[-2px] bg-gray-100/95 rounded-md px-[6px] h-[90%] pt-[7px] font-semibold cursor-pointer">
								Podcasts
							</p>

							<p className="mr-[6px] text-[10px] relative bottom-[-2px] bg-gray-100/95 rounded-md px-[6px] h-[90%] pt-[7px] font-semibold cursor-pointer">
								Music
							</p>

							<p className="mr-[6px] text-[10px] relative bottom-[-2px] bg-gray-100/95 rounded-md px-[6px] h-[90%] pt-[7px] font-semibold cursor-pointer">
								Strategies
							</p>

							<p className="mr-[6px] text-[10px] relative bottom-[-2px] bg-gray-100/95 rounded-md px-[6px] h-[90%] pt-[7px] font-semibold cursor-pointer">
								Business
							</p>

							<p className="mr-[6px] text-[10px] relative bottom-[-2px] bg-gray-100/95 rounded-md px-[6px] h-[90%] pt-[7px] font-semibold cursor-pointer">
								Startup
							</p>
						</AliceCarousel>
					</div>

					{/* end categories */}

					{/* feed */}
					<div className="">{renderPosts()}</div>
					{/* end feed */}

					{/* Bottom tab navigation */}

					<div className="sticky bottom-[0px] pt-[8px] pb-[8px] px-[14px]  flex justify-between items-center translate-y-4 bg-white">
						<div className="flex flex-col items-center justify-center relative">
							<img
								src={`/icons/home-icon.png`}
								className="w-[22px] cursor-pointer relative"
							/>
							<p className="text-[8px] w-[100%]">Shorts</p>
						</div>

						<div className="flex flex-col items-center justify-center relative right-[-7px]">
							<img
								src={`/icons/youtube-shorts-non-selected.png`}
								className="w-[22px] cursor-pointer relative"
							/>
							<p className="text-[8px] w-[100%]">Shorts</p>
						</div>

						<div className="flex items-center justify-center w-[28px] h-[28px] bg-gray-200/50 rounded-full text-[22px] pb-[3px] relative right-[-6px] top-[-3px] cursor-pointer">
							+
						</div>

						<div className="flex flex-col items-center justify-center relative">
							<img
								src={`/icons/youtube-sub-icon.png`}
								className="w-[22px] cursor-pointer relative"
							/>
							<p className="text-[8px] w-[100%]">Subscriptions</p>
						</div>

						<div className="flex flex-col text-center">
							<img
								src={`/icons/me-icon.png`}
								className="w-[22px] cursor-pointer  rounded-full"
							/>
							<p className="text-[8px] w-[100%]">You</p>
						</div>
					</div>

					{/* End Bottom tab navigation */}
				</div>
				{/* end content */}
				<img src="/iphone-15-mockup.png" width="300px" draggable="false" />
			</main>
		</div>
	);
}
