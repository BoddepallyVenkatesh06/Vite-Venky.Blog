import CardWide from "../components/Card/CardWide";
import images from "../utils/images";
import { blogs } from "../data/blog-posts";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="featured-sc bg-white">
          <CardWide blogItemData = { blogs[0]} />
        </section>
      </div>

      c

      <section className="recent-sc">
        <div className="container">
          <div className="recent-content">
            <div className="section-head flex items-end justify-between">
              <div className="sc-head-l">
                <h4 className="title title-lg">Recent Articles</h4>
                <p className="text text-base">
                  Here&apos;s what we&apos;ve been up to recently.
                </p>
              </div>
              <div className="sc-head-r">
                <button type="button" className="btn btn-o-primary">
                  View all
                  <span className="btn-icon">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>

            <div className="card-list grid-cols grid-cols-3">
              {
                blogs.slice(3, 6).map(blogItem => {
                  return (
                    <Card blogItemData = {blogItem} isCardSm = { true } key = {blogItem.id} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className="case-sc">
        <div className="container">
          <div className="case-content">
            <div className="section-head flex items-end justify-between">
              <div className="sc-head-l">
                <h4 className="title title-lg">Case studies</h4>
                <p className="text text-base">
                  Here&apos;s what we&apos;ve been up to recenlty.
                </p>
              </div>
              <div className="sc-head-r">
                <button type="button" className="btn btn-o-primary">
                  View all
                  <span className="btn-icon">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>

            <CardWide blogItemData={ blogs[7] } />
          </div>
        </div>
      </section>

      <section className="all-sc">
        <div className="container">
          <div className="popular-content">
            <div className="section-head flex items-end justify-between">
              <div className="sc-head-l">
                <h4 className="title title-lg">All Articles</h4>
                <p className="text text-base">
                  We share common trends, strategies ideas, opinions, short & long stories from the team behind company.
                </p>
              </div>
              <div className="sc-head-r">
                <button type="button" className="btn btn-o-primary">
                  View all
                  <span className="btn-icon">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>

            <div className="card-list grid-cols grid-cols-2">
              {
                blogs.slice(7, 9).map(blogItem => {
                  return (
                    <Card blogItemData = {blogItem} showContent = {true } key = {blogItem.id} />
                  )
                })
              }
            </div>

            <div className="card-list grid-cols grid-cols-3">
              {
                blogs.slice(9, 12).map(blogItem => {
                  return (
                    <Card blogItemData = {blogItem} isCardSm={ true } key = {blogItem.id} />
                  )
                })
              }
            </div>

            <div className="flex justify-center section-btn">
              <button type="button" className="btn btn-o-primary">
                View articles
                <span className="btn-icon">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="newsletter-curve">
        <img src={`${images.newsletter_wave}`} />
      </div>

      <section className="newsletter-sc bg-blue-dark text-white">
        <div className="container">
          <div className="newsletter-content grid-cols grid-cols-2 items-center">
            <div className="newsletter-l">
              <h3 className="title title-lg">
                Get our stories delivered from us to your inbox weekly.
              </h3>
              <form className="newsletter-form">
                <div className="form-group flex items-stretch">
                  <input type="email" className="form-input" placeholder="Your Email" />
                  <button type="submit" className="btn btn-primary nowrap">Get Started</button>
                </div>
                <p className="text text-base text-gray">
                  Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a response the following data.
                </p>
              </form>
            </div>
            <div className="newsletter-r">
              <div className="newsletter-info">
                <div className="newsletter-info-wrapper bg-white">
                  <div className="info-img">
                    <img src = { `${images.newsletter}`} className="object-fit-cover" />
                  </div>
                  <div className="info-text">
                    <h4 className="text-xxl text title">
                      The best articles every week
                    </h4>

                    <p className="text text-lg">Our insurnace plans offers are priced the same everywheres else.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
