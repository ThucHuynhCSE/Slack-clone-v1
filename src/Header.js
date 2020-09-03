import React from 'react'
import "./Header.css"
import { Avatar, Input } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'



function Header() {
	return (
		<div className="header">
			<div className='header__left'>
				{/* avatar */}
				{/* time icon */}
				<Avatar
					className='header__Avatar'
				// alt='{user?.displayName}'
				// src='{user?.photoURL}'
				/>
				<AccessTimeIcon />
			</div>
			<div className='header__search'>
				{/* search icon */}
				<SearchIcon />
				<input placeholder='input name user'></input>
				{/* search input */}
			</div>
			<div className='header__right'>
				{/* help icon */}
				<HelpOutlineIcon />
			</div>

		</div>
	)
}

export default Header
