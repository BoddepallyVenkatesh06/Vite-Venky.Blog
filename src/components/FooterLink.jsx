import PropTypes from 'prop-types';
import "../styles/Footer.scss";

const FooterLink = ({ linkData }) => {
  return (
    <div className='ftr-item'>
      <h4 className='ftr-item-title text-lg'>{ linkData.title }</h4>
      <ul className='ftr-nav-links'>
        {
          linkData.links.map((link, index) => {
            return (
              <li className='ftr-nav-item' key = { index }>
                <a href="#" className='ftr-nav-link text-base'>{ link }</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FooterLink

FooterLink.propTypes = {
  linkData: PropTypes.object
}
