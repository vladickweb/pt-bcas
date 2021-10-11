import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
	return (
		<Navbar bg='white' expand='lg'>
			<Container>
				<Link to='/' className='text-decoration-none'>
					<Navbar.Brand className='title-home'>
						<svg
							width='2rem'
							height='2rem'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM14.85 13.1L14 13.7V16H10V13.7L9.15 13.1C7.8 12.16 7 10.63 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 10.63 16.2 12.16 14.85 13.1Z'
								fill='#4F6DE2'
							/>
						</svg>
						Cristóbal
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle className='border-0 custom-toggler' aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Link to='/' className='text-decoration-none text-dark'>
							Home
						</Link>
						<Link to='/conseguir-beca' className="text-decoration-none text-dark">
							Empieza ya!
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}