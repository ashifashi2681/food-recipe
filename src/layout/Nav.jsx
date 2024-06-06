import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";

import "../styles/nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
	const [show, setShow] = useState(false);

	return (
		<div className="w-[90%] max-w-[1300px] mx-auto flex justify-between items-center py-4 relative">
			<div className="">
				<img
					className="md:w-36 w-24"
					src="./images/logo.png"
					alt="logo"
				/>
			</div>

			<div className="">
				<ul
					className={`flex md:flex-row md:relative md:items-center md:gap-14 gap-5 absolute flex-col bg-white left-0 top-[100%] right-0 z-10 transition ${
						show
							? "translate-y-0"
							: "translate-y-[-100%] md:translate-y-0 -z-20 md:z-0 opacity-0 md:opacity-100"
					} `}>
					<li className=" group font-semibold ">
						<NavLink>Homepage</NavLink>
						<ul className="absolute md:translate-y-[100%] translate-y-[0] md:translate-x-0 translate-x-[100%] md:top-[100%] top-0 invisible group-hover:translate-y-[0] group-hover:visible transition bg-white flex flex-col gap-2 md:pt-4 ">
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>Super Delicious</NavLink>
							</li>
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>Sweet Tooth</NavLink>
							</li>
						</ul>
					</li>

					<li className=" group font-semibold">
						<NavLink>Recipe Page</NavLink>
						<ul className="absolute md:translate-y-[100%] translate-y-[0] md:translate-x-0 translate-x-[100%] md:top-[100%] top-0 invisible group-hover:translate-y-[0] group-hover:visible transition bg-white flex flex-col gap-2 md:pt-4 z-10">
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>How To</NavLink>
							</li>
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>What You Need</NavLink>
							</li>
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>Ingredients</NavLink>
							</li>
						</ul>
					</li>

					<li className=" relative group font-semibold">
						<NavLink>Pages</NavLink>
						<ul className="absolute md:translate-y-[100%] translate-y-[0] md:translate-x-0 translate-x-[100%] md:top-[100%] top-0 invisible group-hover:translate-y-[0] group-hover:visible transition bg-white flex flex-col gap-2 md:pt-4 z-10">
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>Blog</NavLink>
							</li>
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>Contact</NavLink>
							</li>
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>FAQ</NavLink>
							</li>
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>Terms</NavLink>
							</li>
							<li className="hover:bg-[#FFD7C9] p-2">
								<NavLink>Privacy</NavLink>
							</li>
						</ul>
					</li>

					<li className=" font-semibold">
						<NavLink>Buy</NavLink>
					</li>
				</ul>
			</div>

			<div className=" flex gap-6 items-center">
				<span className=" text-2xl hover:text-[#FF642F] cursor-pointer transition">
					<IoSearchOutline />
				</span>

				<span className="text-lg hover:text-[#FF642F] cursor-pointer transition">
					<FaUserAlt />
				</span>

				<span
					className="block md:hidden text-lg hover:text-[#FF642F] cursor-pointer transition"
					onClick={() => setShow(!show)}>
					<TfiMenu />
				</span>
			</div>
		</div>
	);
}

export default Nav;
