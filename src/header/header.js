import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="header-main-container">
            <div className="twoflex">
                <h3 className="logo-container-heading">EDYODA</h3>
                <select className="selectors">
                    <option>Courses</option>
                    <option>000</option>
                    <option>111</option>
                    <option>222</option>
                </select>
                <select className="selectors">git add README.md
                    <option>Programs</option>
                    <option>000</option>
                    <option>111</option>
                    <option>222</option>
                </select>
            </div>
            <div className="second-header-container">
                <div>
                <FontAwesomeIcon icon={faSearch} />
                </div>
                <div>
                    <span>Log in</span>
                </div>
                <div>
                    <button className="button-element">JOIN NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar