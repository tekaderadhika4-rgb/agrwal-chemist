import { useState } from "react";
import "./App.css";

function App() {
  const [medicine, setMedicine] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const sendWhatsApp = () => {
    const text = `Hello Agrawal Chemist,

Medicine: ${medicine}
Phone: ${phone}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/919907384180?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>✚</span> Agrawal Chemist
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="call-btn" href="tel:9907384180">
          ☎ Call Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">YOUR TRUSTED PHARMACY</p>

          <h1>
            Your Health,
            <br />
            <span>Our Priority.</span>
          </h1>

          <p className="hero-text">
            Agrawal Chemist Medical Store is here to provide
            medicines and healthcare essentials with care and convenience.
          </p>

          <div className="hero-buttons">
            <a href="tel:9907384180" className="primary-btn">
              ☎ Call Now
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="medical-icon">✚</div>
          <h2>Healthcare</h2>
          <p>Medicines & Healthcare Essentials</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <p className="section-label">WHAT WE OFFER</p>
        <h2>Healthcare Essentials</h2>

        <div className="category-grid">

          <div className="category-card">
            <div className="category-icon">💊</div>
            <h3>Medicines</h3>
            <p>
              Medicines for your everyday healthcare needs.
            </p>
          </div>

          <div className="category-card">
            <div className="category-icon">🩹</div>
            <h3>First Aid</h3>
            <p>
              Essential first-aid and wound-care products.
            </p>
          </div>

          <div className="category-card">
            <div className="category-icon">🩺</div>
            <h3>Healthcare</h3>
            <p>
              Healthcare products for everyday requirements.
            </p>
          </div>

          <div className="category-card">
            <div className="category-icon">🧴</div>
            <h3>Personal Care</h3>
            <p>
              Personal hygiene and care essentials.
            </p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">

        <div className="about-content">

          <p className="section-label">ABOUT US</p>

          <h2>Care You Can Trust</h2>

          <div className="about-text">
            <p>
              At Agrawal Chemist Medical Store, our focus is on
              making healthcare essentials easily accessible to our
              customers.
            </p>

            <p>
              For medicine availability and general healthcare
              enquiries, please contact our store.
            </p>
          </div>

        </div>


        <div className="about-highlights">

          <div className="highlight-card">
            <span>💊</span>
            <h3>Healthcare Essentials</h3>
            <p>Easy access to everyday healthcare needs.</p>
          </div>

          <div className="highlight-card">
            <span>⚡</span>
            <h3>Quick Enquiry</h3>
            <p>Quickly enquire about medicine availability.</p>
          </div>

          <div className="highlight-card">
            <span>💬</span>
            <h3>Easy Communication</h3>
            <p>Connect through Call or WhatsApp.</p>
          </div>

          <div className="highlight-card">
            <span>📱</span>
            <h3>Mobile Friendly</h3>
            <p>Simple and smooth experience on mobile.</p>
          </div>

        </div>


        <div className="why-us">

          <p className="section-label">WHY CHOOSE US</p>

          <h2>Simple Healthcare, Easy Access</h2>

          <div className="why-grid">

            <div className="why-card">
              <span>⚡</span>
              <h3>Quick Enquiry</h3>
              <p>Quickly enquire about medicine availability.</p>
            </div>

            <div className="why-card">
              <span>💬</span>
              <h3>Easy Communication</h3>
              <p>Connect with the store through Call or WhatsApp.</p>
            </div>

            <div className="why-card">
              <span>📱</span>
              <h3>Mobile Friendly</h3>
              <p>Designed for a smooth mobile experience.</p>
            </div>

            <div className="why-card">
              <span>🚀</span>
              <h3>Future Ready</h3>
              <p>Can be expanded with more digital healthcare services.</p>
            </div>

          </div>

        </div>

      </section>

      {/* Services Section */}
      <section className="services" id="services">

        <p className="section-label">OUR SERVICES</p>

        <h2>How We Can Help</h2>
        <div className="medicine-enquiry">
          <h3>Need a Medicine?</h3>
          <p>Send us your medicine enquiry and contact us for availability.</p>

          <input
            type="text"
            placeholder="Enter medicine name"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Any additional message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label className="prescription-label">
            📄 Upload Prescription
          </label>

          <input
            type="file"
            accept="image/*,.pdf"
          />
          <button
            type="button"
            className="enquiry-btn"
            onClick={sendWhatsApp}
          >
            Send Enquiry on WhatsApp
          </button>



        </div>


        <div className="service-grid">

          <div className="service-card">
            <span>💊</span>
            <h3>Medicine Enquiry</h3>
            <p>
              Contact us to enquire about medicine availability.
            </p>
          </div>

          <div className="service-card">
            <span>☎</span>
            <h3>Quick Assistance</h3>
            <p>
              Reach out to our store for your healthcare queries.
            </p>
          </div>

          <div className="service-card">
            <span>🏥</span>
            <h3>Healthcare Essentials</h3>
            <p>
              Explore essential healthcare and personal-care products.
            </p>
          </div>

        </div>

      </section>
      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="faq">
        <p className="section-label">FAQ</p>
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">

          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            >
              <span>How can I enquire about a medicine?</span>
              <span>{openFaq === 0 ? "−" : "+"}</span>
            </button>

            {openFaq === 0 && (
              <p>
                You can contact Agrawal Chemist through phone or WhatsApp
                to enquire about medicine availability.
              </p>
            )}
          </div>

          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            >
              <span>Can I contact the store on WhatsApp?</span>
              <span>{openFaq === 1 ? "−" : "+"}</span>
            </button>

            {openFaq === 1 && (
              <p>
                Yes, you can use the WhatsApp Enquiry option to connect
                with the store.
              </p>
            )}
          </div>

          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            >
              <span>Can I upload a prescription?</span>
              <span>{openFaq === 2 ? "−" : "+"}</span>
            </button>

            {openFaq === 2 && (
              <p>
                A prescription upload option is available for enquiry.
                Further processing can be connected with the store.
              </p>
            )}
          </div>

          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            >
              <span>Can I contact the store for healthcare products?</span>
              <span>{openFaq === 3 ? "−" : "+"}</span>
            </button>

            {openFaq === 3 && (
              <p>
                Yes, you can contact the store for general healthcare
                product enquiries.
              </p>
            )}
          </div>

        </div>
      </section>

      {/* Contact Section */}

      {/* Contact Section */}
      <section className="contact" id="contact">

        {/* LEFT SIDE */}
        <div className="contact-content">

          <p className="section-label">GET IN TOUCH</p>

          <h2>Need Assistance?</h2>

          <p className="contact-description">
            Have questions about medicine availability or healthcare products?
            Contact Agrawal Chemist Medical Store directly for quick assistance.
          </p>

          <div className="contact-details">

            <a href="tel:9907384180" className="contact-item">
              <span>☎</span>
              <div>
                <h3>Call Store</h3>
                <p>9907384180</p>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/RR7Q7earT9q7vH6u8"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>📍</span>
              <div>
                <h3>Store Location</h3>
                <p>Agrawal Chemist Medical Store</p>
              </div>
            </a>

            <a
              href="https://wa.me/919907384180"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>💬</span>
              <div>
                <h3>WhatsApp</h3>
                <p>Chat with our store</p>
              </div>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="map-container">

          <iframe
            src="https://www.google.com/maps?q=Agrawal+Chemist+Shop+No+10+Usha+Nagar+Main+Annapurna+Road+Indore&output=embed"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Agrawal Chemist Location"
          ></iframe>

        </div>

      </section>




      {/* Footer */}
      <footer>

        <div className="logo">
          <span>✚</span> Agrawal Chemist
        </div>

        <p>Agrawal Chemist Medical Store</p>

        <p>☎ 9907384180</p>

        <p>© 2026 All Rights Reserved.</p>

      </footer>

    </div>
  );
}

export default App;
