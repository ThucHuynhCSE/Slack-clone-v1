import './SidebarOption.css'
import React from 'react'

function SidebarOption({ Icon, title }) {
	return (
		<div className='sidebarOption'>
			{Icon && <Icon className='sidebarOption__icon' />}
			{Icon ?
				<h3>
					{title}
				</h3> : null}
		</div>
	)
}

export default SidebarOption
