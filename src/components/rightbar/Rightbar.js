import React, { useState } from 'react'
import './rightbar.css'
import Topbar from '../topbar/Topbar'
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from 'react-icons/hi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { CgNotes } from 'react-icons/cg'
import { PiWalletLight } from 'react-icons/pi'
import { TbShoppingBag } from 'react-icons/tb'
import MonthlyEarning from '../monthlyEarning/MonthlyEarning'
import Customers from '../customers/Customers'
import ProductTable from '../productTable/ProductTable'

function Rightbar() {
  const [selectedOption, setSelectedOption] = useState('Quarterly');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <Topbar />
        <div className='finance'>
          <div className='finaceContainer'>
            <div className='financeIconContainer' style={{ backgroundColor: 'rgb(235, 209, 200)' }}>
              <RiMoneyDollarCircleLine className='financeIcon' style={{ color: 'rgb(223, 77, 77)' }} />
            </div>
            <div className='financeDetails'>
              <div className='financeName'>Earning</div>
              <div className='financePrice'>$198K</div>
              <div className='financeTime'><span className='financeSpan'><HiOutlineArrowSmUp /> 37.8%</span> this month</div>
            </div>
          </div>
          <div className='finaceContainer'>
            <div className='financeIconContainer' style={{ backgroundColor: 'rgb(235, 209, 200)' }}>
              <CgNotes className='financeIcon' style={{ color: 'rgb(223, 77, 77)' }} />
            </div>
            <div className='financeDetails'>
              <div className='financeName'>Orders</div>
              <div className='financePrice'>$2.4K</div>
              <div className='financeTime'><span className='financeSpan'><HiOutlineArrowSmDown /> 2%</span> this month</div>
            </div>
          </div>
          <div className='finaceContainer'>
            <div className='financeIconContainer' style={{ backgroundColor: 'rgb(235, 209, 200)' }}>
              <PiWalletLight className='financeIcon' style={{ color: 'rgb(223, 77, 77)' }} />
            </div>
            <div className='financeDetails'>
              <div className='financeName'>Balance</div>
              <div className='financePrice'>$2.4K</div>
              <div className='financeTime'><span className='financeSpan'><HiOutlineArrowSmDown /> 2%</span> this month</div>
            </div>
          </div>
          <div className='finaceContainer'>
            <div className='financeIconContainer' style={{ backgroundColor: 'rgb(235, 209, 200)' }}>
              <TbShoppingBag className='financeIcon' style={{ color: 'rgb(223, 77, 77)' }} />
            </div>
            <div className='financeDetails'>
              <div className='financeName'>Total Sales</div>
              <div className='financePrice'>$89K</div>
              <div className='financeTime'><span className='financeSpan'><HiOutlineArrowSmUp /> 11%</span> this week</div>
            </div>
          </div>
        </div>
        <div className='middlebar'>
          <div className='middlebarLeft'>
            <div className='leftTop'>
              <div className='leftHeading'>
                <div className='leftHeadingTop'>Overview</div>
                <div className='leftHeadingBottom'>Monthly Earning</div>
              </div>
              <div className='leftDropdown'>
                <div class="dropdownList">
                  <select value={selectedOption} onChange={handleChange} className='selectList'>
                    <option value={'Weekly'}>Weekly</option>
                    <option value={'Quarterly'}>Quarterly</option>
                    <option value={'Annual'}>Annual</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='leftBottom'>
              <MonthlyEarning className='earninigBar' />
            </div>
          </div>
          <div className='middlebarRight'>
            <div className='middlebarRightTop'>
              <div className='middlebarRightTopHeading1'>Customers</div>
              <div className='middlebarRightTopHeading2'>Customers that buy products</div>
            </div>
            <div className='middlebarRightBottom' id='CustomerChart'>
              <Customers />
            </div>
          </div>
        </div>
        <div className='bottomBar'>
          <ProductTable />
        </div>
      </div>
    </div>
  )
}

export default Rightbar