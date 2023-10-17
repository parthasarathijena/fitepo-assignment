import React, { useState } from 'react'
import './productTable.css'
import { GoSearch } from 'react-icons/go'

function ProductTable() {
    const [selectedOption, setSelectedOption] = useState('30days');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className='productWrapper'>
            <div className='productTop'>
                <div className='productHeading'>
                    Product Sell
                </div>
                <div className='productFilter'>
                    <div className='searchbar'>
                        <div classname='searchImgContainer'>
                            <GoSearch className='searchIcon' />
                        </div>
                        <div className='searchInputContainer'>
                            <input type="text" class="searchInput" placeholder="Search" />
                        </div>
                    </div>
                    <div className="dropdownList">
                        <select value={selectedOption} onChange={handleChange} className='selectList'>
                            <option value={'3days'}>Last 3 days</option>
                            <option value={'7days'}>Last 7 days</option>
                            <option value={'30days'}>Last 30 days</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='productBottom'>
                <table className='productTable'>
                    <thead>
                        <tr>
                            <th className='th1'>Product Name</th>
                            <th className='th2'>Stocks</th>
                            <th className='th3'>Price</th>
                            <th className='th4'>Total Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='productNameContainer'>
                                    <div className='ProductImgContainer'>
                                        <img src='../images/tableimg1.jpg' className='productImg' alt='' />
                                    </div>
                                    <div className='nameContainer'>
                                        <div className='productName'>Abstract 3d</div>
                                        <div className='productDesc'>Larem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                            </td>
                            <td>32 in stock</td>
                            <td>$45.99</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='productNameContainer'>
                                    <div className='ProductImgContainer'>
                                        <img src='../images/tableimg2.jpg' className='productImg' alt='' />
                                    </div>
                                    <div className='nameContainer'>
                                        <div className='productName'>Sarphens illustration</div>
                                        <div className='productDesc'>Larem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                            </td>
                            <td>32 in stock</td>
                            <td>$45.99</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ProductTable