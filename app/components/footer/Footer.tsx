import { footerNavigation } from '@/app/consts'
import React from 'react'
import { CiGlobe } from "react-icons/ci";
import FooterTabs from './FooterTabs';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare   } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="container bg-[#f7f7f7] text-black pb-[40px]">
			<div className="px-[20px] py-[20px] md:px-[50px] md:py-[40px]">
				<h1 className='font-bold mb-[10px] text-[1.3rem]'>Inspirasi untuk liburan mendatang</h1>
				<FooterTabs />
			</div>

			<div className="border-t">
				<div className="px-[20px] md:px-[50px]">
					<div className="border-b py-[20px]">
						<div className="flex flex-col gap-[20px] md:gap-0 md:flex-row md:items-center md:justify-between">
							{
								footerNavigation.map((item, idx) => {
									return (
										<div className="" key={idx}>
											<h3 className='font-bold mb-[10px]'>{item.title}</h3>
											<div className="flex flex-col gap-3">
												{
													item.links.map((link, idx) => {
														return (
															<a href="#" key={idx} className=''>
																<span className='border-b-0 w-[100%] hover:border-b hover:border-black'>{link}</span>
															</a>
														)
													})
												}
											</div>
										</div>
									)
								})
							}
						</div>
					</div>

					<div className="my-[20px]">
						<div className="flex flex-col md:flex-row items-center justify-between gap-[20px] md:gap-0">
							<div className="flex flex-wrap md:flex-row gap-[10px]">
								<p>© 2024 Airbnb, Inc.</p>
								<a href="#" className='hover:border-b-black hover:border-b'>Privasi</a>
								<a href="#" className='hover:border-b-black hover:border-b'>Ketentuan</a>
								<a href="#" className='hover:border-b-black hover:border-b'>Peta Situs</a>
							</div>

							<div className="flex items-center gap-[10px]">
								<a href="#" className='flex items-center gap-[5px]'>
									<CiGlobe />
									<span className='hover:border-b-black hover:border-b'>Bahasa Indonesia (ID)</span>
								</a>
								<a href="#"> <FaFacebookSquare /> </a>
								<a href="#"> <FaInstagramSquare /> </a>
								<a href="#"> <FaTwitterSquare /> </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer