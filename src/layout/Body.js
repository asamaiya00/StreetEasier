import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './body/home/Home'
import About from './body/about/About'
import Members from './body/members/Members'
import Contacts from './body/contacts/Contacts'
import UserLoginSignup from './body/user-login-signup/UserLoginSignup'

const Body = () => {
	return (
		<Fragment>
			<Routes>
				<Route path="*" element={<Home />}></Route>
				<Route path="/welcome" element={<Home />}></Route>
				<Route path="/about" element={<About />} />
				<Route path="/members" element={<Members />} />
				<Route path="/contact" element={<Contacts />} />
				<Route
					path="/user-login-signup"
					element={<UserLoginSignup />}
				/>
			</Routes>
		</Fragment>
	)
}

export default Body
