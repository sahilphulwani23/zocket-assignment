import React from 'react';
import { Link } from 'react-router-dom';
// Component
import Layout from '../layout/Layout';
// css images and icons
import "./campaign.css";
import Cake2 from '../assets/cake2.png';
import Cake3 from '../assets/cake3.png';
import Cake4 from '../assets/cake4.png';
import Cake5 from '../assets/cake5.png';
import Cake6 from '../assets/cake6.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';

const Campaign = () => {
    return (
        <Layout>
            <div className="campaign--container">
                <div className="campaign--header">
                    <div className='campaign--header-title'>
                        <h4>Your Campaigns</h4>
                        <p>Check the list of campaigns you created</p>
                    </div>
                    <Link className='campaign--create-new-campaign-button' to="/createNewCampaign">
                        <AiOutlinePlusCircle />
                        Create new campaign
                    </Link>
                </div>
                <div className="campaign--main-body">
                    {/* filters */}
                    <div className="campaign--main-body-filters">
                        <div className='campaign--main-body-filters-searchbox'>
                        <input type="search" placeholder='Search for the campaign' />
                        </div>
                        <div className='campaign--main-body-filters-platform'>
                            
                            <label>Platform:</label>
                            <select>
                                <option>All Platform</option>
                                <option>Facebook</option>
                                <option>Youtube</option>
                                <option>Google</option>
                            </select>
                        </div>
                        <div className='campaign--main-body-filters-status'>
                            <label>Status:</label>
                            <select>
                                <option>All Status</option>
                                <option>Live now</option>
                                <option>Paused</option>
                                <option>Exhausted</option>
                            </select>
                        </div>
                        <div className='campaign--main-body-filters-date-range'>
                            <select>
                                <option>Last 30 days</option>
                                <option>Last 15 days</option>
                                <option>Last 7 days</option>
                            </select>
                        </div>
                    </div>

                    {/* data table */}
                    <div className="campaign--main-body-table">
                        <table>
                            <thead>
                                <tr>
                                    <th><input type='checkbox' /></th>
                                    <th>On/Off</th>
                                    <th>Campaign</th>
                                    <th>Date Range</th>
                                    <th>Clicks</th>
                                    <th>Budget</th>
                                    <th>Location</th>
                                    <th>Platform</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake2} alt="cake" />
                                            <div>
                                                <p><strong>Blueberry cake Campaign</strong></p>
                                                <p>Created on 14 july</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>300</td>
                                    <td>INR 3400</td>
                                    <td>Chennai</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake3} alt="cake" />
                                            <div>
                                                <p><strong>Chocolate cake Campaign</strong></p>
                                                <p>Created on 20 Jan</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>210</td>
                                    <td>INR 3400</td>
                                    <td>Coimbatore</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake4} alt="cake" />
                                            <div>
                                                <p><strong>Browine cake Campaign</strong></p>
                                                <p>Created on 12 June</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>123</td>
                                    <td>INR 3400</td>
                                    <td>Erode</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake5} alt="cake" />
                                            <div>
                                                <p><strong>Pumpkin cake Campaign</strong></p>
                                                <p>Created on 28 Feb</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>435</td>
                                    <td>INR 3400</td>
                                    <td>Coimbatore</td>
                                    <td className='campaign--main-body-table-rows-platform-col yt'>
                                        <BsYoutube />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake6} alt="cake" />
                                            <div>
                                                <p><strong>Blueberry cake campaign</strong></p>
                                                <p>Created on 10 July</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>123</td>
                                    <td>INR 3400</td>
                                    <td>Coimbatore</td>
                                    <td className='campaign--main-body-table-rows-platform-col google'>
                                        <BsGoogle />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Campaign