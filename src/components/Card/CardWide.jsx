import images from "../../utils/images";
import "../../styles/Card.scss";
import PropTypes from "prop-types";


const CardWide = ({ blogItemData }) => {
  console.log(blogItemData);
  return (
    <div className="card-grid grid">
      <div className="card-grid-img">
        <img src = {`${blogItemData.image}`} alt = "Featured image" className="object-fit-cover" />
      </div>
      <div className="card-grid-text">
        <div>
          <div className="badge badge-primary">featured</div>
          <h2 className="title-lg title featured-title">
            { blogItemData.title }
          </h2>
          <p className="text-lg text">
            {blogItemData.content}
          </p>
        </div>

        <div className="card-footer flex justify-between items-center">
          <div className="writer-info grid">
            <div className="info-avatar">
              <img src = { `${blogItemData.authorImage }`} alt="" className="object-fit-cover" />
            </div>
            <div className="info-intro">
              <p className="intro-name text-base">{ blogItemData.author }</p>
              <div className="intro-verify flex items-center">
                <img src = { `${images.verify_icon_light}`} className="verify-icon" />
                <span className="verify-status text-sm text">Verified writer</span>
              </div>
            </div>
          </div>
          <div className="date-info text text-base">{ blogItemData.date}</div>
        </div>
      </div>
    </div>
  )
}

export default CardWide

CardWide.propTypes = {
  blogItemData: PropTypes.object
}