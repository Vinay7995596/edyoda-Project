import './style.css'
import { BiBookOpen } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { MdLiveTv} from "react-icons/md";
import {IoSchoolSharp} from "react-icons/io5"
import { CiCircleRemove } from "react-icons/ci"

function Body() {
    return (
        <div className="main-bg-container">
        <div className="first-container">
            <h6 className="acess-container-heading">Access curated courses worth <br />
                <span className="special-letters-strike">₹18,500</span> at just <span className="special-letters">₹99</span>per year!</h6>
            <ul>
                <li>
                    <div className="images-points-sliging">
                        <BiBookOpen size="50px" color="white" />
                        <span className="special-letters">100+ </span>Job relevant courses
                    </div>
                </li>
                <li>
                    <div className="images-points-sliging">
                        < FiClock size="50px" color="#fff"/>
                        <span className="special-letters">20,000+ </span>Hours of content
                    </div>
                </li>
                <li>
                    <div className="images-points-sliging">
                        <MdLiveTv size="50px" color="#fff"/>
                        <span className="special-letters">Exclusive</span>webinar access
                    </div>
                </li>
                <li>
                    <div className="images-points-sliging">
                        <IoSchoolSharp size="50px" color="#fff"/>
                        Schlarship worth<span className="special-letters">₹94,500</span>
                    </div>
                </li>
                <li>
                    <div className="images-points-sliging">
                        <CiCircleRemove size="50px" color="#fff"/>
                        <span className="special-letters">Add Free</span>learning experince
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <div className="white-box-container-main">
                <div className="numbers-container">
                        <div>
                            <div className="round-circle">1</div>
                            <p>Sign up</p>
                        </div>
                        <div>
                            <div className="round-circle">2</div>
                            <p>Subscribe</p>
                        </div>
                </div>
                <div>
                    <p className="subscription-plan">Select your subscription plan</p>
                </div>
                    <div className="box-container-white">
                        <div className="para-input">
                            <input type="radio" name="price" className="radio-buttons" />
                            <p className="subscription-heading">12months subscription</p>
                        </div>
                        <div>
                            <p className="subscription-heading">Total<span>₹99</span></p>
                            <p className="subscription-heading"><span>₹8</span> /mo</p>
                        </div>
                    </div>
                    <div className="box-container-green">
                        <div className="para-input">
                            <input type="radio" name="price" className="radio-buttons" />
                            <p className="subscription-heading heading-of-different">12months subscription</p>
                        </div>
                        <div>
                            <p className="subscription-heading heading-of-different">Total<span>₹179</span></p>
                            <p className="subscription-heading heading-of-different"><span>₹15</span> /mo</p>
                        </div>
                    </div>
                <div className="box-container-last">
                    <div className="para-input">
                    <input type="radio" name="price" className="radio-buttons" />
                    <p className="subscription-heading heading-of-different">6months subscription</p>
                    </div>
                    <div>
                        <p className="subscription-heading heading-of-different">Total<span>₹149</span></p>
                        <p className="subscription-heading heading-of-different"><span>₹25</span> /mo</p>
                    </div>
                </div>
                <div className="box-container-last">
                    <div className="para-input">
                    <input type="radio" name="price" className="radio-buttons" />
                    <p className="subscription-heading heading-of-different">3months subscription</p>
                    </div>
                    <div>
                        <p className="subscription-heading heading-of-different">Total<span>₹99</span></p>
                        <p className="subscription-heading heading-of-different"><span>₹25</span> /mo</p>
                    </div>
                </div>
                <hr className="horizantal-line" />
                <div className="side-element-aligning">
                    <p className="subscription-heading">Subscription Fee</p>
                    <span className="subscription-heading">₹18,500</span>
                </div>
                <div className="box-container-red">
                    <div>
                    <p className="subscription-heading heading-of-red">Limited time Offer</p> <br />
                    <p className="subscription-heading heading-of-red">Offer valid till 25th March 2023</p>
                    </div>
                    <div>
                        <p className="subscription-heading heading-of-red">Total<span>₹199</span></p>
                        <p className="subscription-heading heading-of-red"><span>₹33</span> /mo</p>
                    </div>
                </div>
                <div className="gst-container">
                    <p className="subscription-heading heading-of-different">Total<span className="span-gst">(Incl. of 18% GST)</span></p>
                    <span className="pricing-heading">₹149</span>
                </div>
                <div className="buttons-container ">
                    <button className="cancel-button">Cancel</button>
                    <button className="pay-button">Proceed To Pay</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Body