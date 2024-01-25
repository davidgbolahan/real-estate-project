import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <div className="homepage">
          <header>
            <h1>Welcome to Brash Havilah</h1>
            <p>Your Trusted Partner in Real Estate</p>
          </header>
          <div className="video-container">
        <video width="100%" height="auto" controls>
          <source src="https://www.youtube.com/results?search_query=videos+of+house+sale+at+pinnock+estate" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="services">
        <h2>Our Services</h2>
        <p>
          At Brash Havilah, we offer a range of real estate services to meet your unique needs. Our services include property listings, home valuations, property management, and real estate consulting. We take pride in delivering professional and transparent services to our clients.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Brash Havilah Real Estate?</h2>
        <p>
          - Extensive Property Listings: Explore a wide range of properties that suit your preferences and budget.
        </p>
        <p>
          - Experienced Team: Our team of real estate professionals brings years of expertise and market knowledge.
        </p>
        <p>
          - Client-Centric Approach: We prioritize our clients' needs and strive to exceed their expectations.
        </p>
        <p>
          - Transparent Transactions: Trust us for transparent and ethical real estate transactions.
        </p>
      </section>
          <section className="featured-properties">
            <h2>Featured Properties</h2>
            {/* Display featured properties */}
            <div className="property-card">
              <img src="../../../public/kitc.jpg" alt="Property" />
              <h3></h3>
              <p>Property details and description...</p>
              <button>View Details</button>
            </div>
            <div className="property-card">
              <img src="../../../public/home.jpg" alt="Property" />
              <h3></h3>
              <p>Property details and description...</p>
              <button>View Details</button>
            </div>
            <div className="property-card">
              <img src="../../../public/WhatsApp Image 2023-12-06 at 18.45.41_37b8c94d.jpg" alt="Property" />
              <h3></h3>
              <p>Property details and description...</p>
              <button>View Details</button>
            </div>
            <div className="property-card">
              <img src="../../../public/about us.jpg" alt="Property" />
              <h3></h3>
              <p>Property details and description...</p>
              <button>View Details</button>
            </div>
            <div className="property-card">
              <img src="../../../public/WhatsApp Image 2023-12-13 at 18.10.05_05f2fcf1.jpg" alt="Property" />
              <h3></h3>
              <p>Property details and description...</p>
              <button>View Details</button>
            </div>
            {/* More property cards can be added here */}
          </section>
        </div>
    </div>
  )
}

export default Homepage