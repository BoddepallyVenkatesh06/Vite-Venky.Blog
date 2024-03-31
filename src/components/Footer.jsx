import { linksData } from "../data/blog-posts";
import FooterLink from "./FooterLink";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-blue-dark">
      <div className="container">
        <div className="ftr-list">
          <div className="ftr-item">
            <a href="#" className="ftr-brand text-white">
              Venky . Blog
            </a>

            <p className="text text-base">
              Build a modern and creative website with crealand
            </p>
            <ul className="social-links text-white flex flex-wrap text-gray text-base">
              <li><a className="" href="#">Twitter</a></li>
              <li><a className="" href="#">Linkedin</a></li>
              <li><a className="" href="#">Instagram</a></li>
              <li><a className="" href="#">Google</a></li>
              <li><a className="" href="#">YouTube</a></li>
            </ul>
          </div>

          {
            linksData.map((linkData) => {
              return (
                <FooterLink key = { linkData.id } linkData = { linkData } />
              )
            })
          }
        </div>
        <div className="ftr-text text-center text-gray text-base">Copyright &copy; 2024. Template Create By Venky Kumar</div>
      </div>
    </footer>
  )
}

export default Footer
