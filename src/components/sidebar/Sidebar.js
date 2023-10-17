import React from 'react'
import './sidebar.css'
import { TbHexagonLetterO } from 'react-icons/tb'
import { CiDiscount1 } from 'react-icons/ci'
import { PiWalletLight } from 'react-icons/pi'
import { MdOutlinePortrait, MdOutlineDashboard, MdOutlineLiveHelp } from 'react-icons/md'
import { BsBox } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarUpper'>
                    <div className='sidebarHeading'>
                        <TbHexagonLetterO className='headingLogo' />
                        <div className='headingName'> Dashboard</div>
                    </div>
                    <div className='sidebarListContainer'>
                        <ul className='sidebarList'>
                            <li className='sidebarListItem'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropButton active" type="button" >
                                        <div className='itemName'>
                                            <MdOutlineDashboard className='listIcon' />
                                            Dashboard
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li className='sidebarListItem'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropButton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className='itemName'>
                                            <BsBox className='listIcon' />
                                            Product
                                        </div>
                                        <div className='arrow'>
                                            <FaChevronRight />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='sidebarListItem'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropButton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className='itemName'>
                                            <MdOutlinePortrait className='listIcon' />
                                            Customer
                                        </div>
                                        <div className='arrow'>
                                            <FaChevronRight />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='sidebarListItem'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropButton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className='itemName'>
                                            <PiWalletLight className='listIcon' />

                                            Income
                                        </div>
                                        <div className='arrow'>
                                            <FaChevronRight />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='sidebarListItem'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropButton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className='itemName'>
                                            <CiDiscount1 className='listIcon' />
                                            Promote
                                        </div>
                                        <div className='arrow'>
                                            <FaChevronRight />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='sidebarListItem'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropButton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className='itemName'>
                                            <MdOutlineLiveHelp className='listIcon' />
                                            Help
                                        </div>
                                        <div className='arrow'>
                                            <FaChevronRight />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                        <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='sidebarBottom'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropButton active" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='itemName'>
                                <img className='profileImg' src='../images/psjimg.jpeg' alt='' />
                                <div className='profiledetails'>
                                    <div className='profileName'>Evano</div>
                                    <div className='profilePosition'>Project Manager</div>
                                </div>
                            </div>
                            <div className='arrow'>
                                <FiChevronDown />
                            </div>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                            <li><a className="dropdown-item" href="https://www.google.com/">Action</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar