import React, { useState } from 'react'

import Modal from '../ui/Modal'

import img from '../../assets/apartments/dummyApartmentImage.jpg'
import Overview from '../ui/Overview'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -125, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.1, duration: 0.4 },
	},
}

function Apartment({
	address,
	pricePerMonth,
	numBedRooms,
	numBathrooms,
	numPeopleInterested,
}) {
	const [apartmentModalIsOpen, setApartmentModalIsOpen] = useState(false)

	const apartmentModalVisibilityHandler = () => {
		setApartmentModalIsOpen((prevState) => !prevState)
	}

	return (
		<motion.div
			className="bg-secondary text-white flex flex-row space-y-2 space-x-4 rounded-xl shadow-lg h-36 cursor-pointer hover:scale-105 duration-200"
			onClick={apartmentModalVisibilityHandler}
			variants={imageAnimate}
		>
			{apartmentModalIsOpen && (
				<Modal>
					<img
						src={img}
						alt="Apartment"
						className="rounded-2xl"
					/>
					<Overview
						title={`$${pricePerMonth}/mo`}
						subtitle={address}
						paragraph={`There are currently ${numPeopleInterested} in this property`}
					/>
				</Modal>
			)}
			<img
				src={img}
				alt="Apartment for rent"
				className="w-32 block object-cover rounded-[5.5rem] rounded-tl-xl rounded-bl-xl overflow-hidden"
			/>
			<div className="flex flex-col text-xs space-y-2 pb-2">
				<h1 className="text-lg font-extrabold mb-2">{`$${pricePerMonth}/mo`}</h1>

				<p>{address}</p>
				<h3>{`There are currently ${numPeopleInterested} in this property`}</h3>
				<p className="text-gray-500">{`${numBedRooms} Bedrooms and ${numBathrooms} Bathrooms`}</p>
			</div>
		</motion.div>
	)
}

export default Apartment
