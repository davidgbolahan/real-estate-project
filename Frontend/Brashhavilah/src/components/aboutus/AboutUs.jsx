import './AboutUs.css'

const AboutUs = () => {
  return (
              <div className="about-us">
              <h2>About Us</h2>
              <p> <b>Welcome to Brash Havilah Real Estate!</b></p>
              <p>
                We are a dedicated team committed to providing exceptional real estate services. <br />
                Our mission is to assist our clients in finding their dream properties and <br />
                ensuring a smooth buying or selling process.
              </p>
              <p>
                At Brash Havilah, we strive for excellence, integrity, and professionalism in
                every transaction. <br /> Our experienced agents are here to guide you through every 
                step of your real estate journey.
              </p>
              <p>
                Whether you are looking for your next home, an investment property, or selling <br />
                your current property, we are here to help. Contact us today to get started!
              </p>
              <div className="location-map">
                <iframe
                  title="Lagos Island Map"
                  width="70%"
                  height="360"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6939037661324!2d3.414507314634162!3d6.454013824883077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f8f4b9b6b29%3A0x425cb5a734789569!2sLagos%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1643303630671!5m2!1sen!2sng"
                ></iframe>
              </div>
                    </div>
  )
}

export default AboutUs