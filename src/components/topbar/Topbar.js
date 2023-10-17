import React from 'react'
import './topbar.css'
import { GoSearch } from 'react-icons/go'
import { PiHandWavingDuotone } from 'react-icons/pi'

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='greeting'>
                    Hello Shahrukh<PiHandWavingDuotone className='greetIcon' />
                </div>
                <div className='searchbar'>
                    <div classname='searchImgContainer'>
                        <GoSearch className='searchIcon' />
                    </div>
                    <div className='searchInputContainer'>
                        <input type="text" class="searchInput" placeholder="Search" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar