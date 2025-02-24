'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const images = [
  '/images/R44 Performance 3.png',
  '/images/pr-2.png',
  '/images/pr-3.png',
  '/images/Manna.png',
  '/images/Manna-2.png',
  '/images/Manna-3.png',
  '/images/Vital.jpg',
  '/images/Vital-2.png',
  '/images/Vital-3.png',
];



export default function Home() {
  useEffect(() => {
    // Dynamically import Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      {/* Bootstrap JS and dependencies */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    <div>
      {/* Navigation Section */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container justify-content-between">
          <a className="navbar-brand" href="#">
            <Image className="logo" src="/images/log.png" alt="Logo" width={100} height={50} />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link text-white" href="">About</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="">Services</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="">Showcase</a></li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link text-white" href="">Testimonial</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="">Contact</a></li>
              <li className="nav-item">
                <span className="search-icon d-none d-lg-block">
                  <Image src="/images/search.png" alt="search" width={22} height={22} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            {/* Content Section */}
            <div className="col-12 col-md-6">
              <h1 className="custom-heading text-white">Achieve Digital Excellence with Data Analytics Exploration</h1>
              <p className="content text-white">
                Maximize your website's performance with Data Analytics Consulting services. As an expert in <span className="spn_1">Digital Marketing Analytics</span>, Web Analytics, and Google Data Analytics, I offer tailored solutions and actionable insights to help you achieve your digital marketing goals.
              </p>
              <div className="cta-buttons">
                <a href="#" className="btn btn-light me-2">Browse My Work</a>
                <a href="#" className="btn btn-default">Chat With Me</a>
              </div>
            </div>
            {/* Image Section */}
            <div className="col-12 col-md-6 text-center">
              <video className="img-fluid" autoPlay muted loop playsInline>
              <source src="/images/topvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
{/* New Logo Section */}
<section className="sec_2">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="/images/wix-logo.png" className="img-fluid" alt="Wix" />
            </div>
            <div className="col">
              <img src="/images/google-logo.png" className="img-fluid" alt="Google" />
            </div>
            <div className="col">
              <img src="/images/microsoft-logo.png" className="img-fluid" alt="Microsoft" />
            </div>
            <div className="col">
              <img src="/images/meta-logo.png" className="img-fluid" alt="Meta" />
            </div>
            <div className="col">
              <img src="/images/shopify-logo.png" className="img-fluid" alt="Shopify" />
            </div>
            <div className="col">
              <img src="/images/magento-logo.png" className="img-fluid" alt="Magento" />
            </div>
            <div className="col">
              <img src="/images/wordpress-logo.png" className="img-fluid" alt="WordPress" />
            </div>
            <div className="col">
              <img src="/images/unbounce-logo.png" className="img-fluid" alt="Unbounce" />
            </div>
          </div>
        </div>
      </section>

         {/* New Section 3: Data Analytics */}
         <div className="section3 text-white">
        <div className="container">
          <div className="upr_cnt12 max_widt1 text-center">
            <h2>Let's Unlock the Power of Your Data</h2>
            <p>
              Are you ready to transform your website data into a powerful asset that drives business growth? As a dedicated digital data analytics expert, I’m here to help you unlock the full potential of your data.
            </p>
          </div>
          <div className="row align-items-center">
            {/* Left side: Image or icon structure */}
            <div className="col-md-6 ds_img1">
              <img src="/images/ds.png" className="dsimg" alt="Data visualization image" />
            </div>

            {/* Right side: Text content with timeline and line */}
            <div className="col-md-6 position-relative">
              <div className="timeline-line"></div>

              <div className="content-block">
                <div className="timeline-point"></div>
                <h3>Gain a Competitive Advantage</h3>
                <p>
                  Leverage data insights to keep you ahead of the curve with the <span className="spn_1">Digital Marketing Analytics</span> solutions. <span className="spn_1">Data Analytics Services</span> enable you to understand user behavior trends in your industry, empowering you to make informed decisions that differentiate you from competitors. With my expertise as a <span className="spn_1">Web Analytics Expert</span>, you can harness data's power to drive growth and foster innovation.
                </p>
              </div>

              <div className="content-block">
                <div className="timeline-point"></div>
                <h3>Optimize Marketing Spend</h3>
                <p>
                  Stop wasting money on ineffective marketing campaigns. Use <span className="spn_1">Digital Marketing Analytics</span> to target your ideal audience and measure the ROI of your marketing efforts with laser precision.
                </p>
              </div>

              <div className="content-block">
                <div className="timeline-point"></div>
                <h3>Boost Website Conversions</h3>
                <p>
                  Convert more website visitors into leads and customers. As a leading <span className="spn_1">Web Analytics Consultant</span>, I leverage data insights to drive actionable strategies that enhance user experience and maximize conversion rates.
                </p>
              </div>

              <div className="content-block">
                <div className="timeline-point"></div>
                <h3>Make Data-Driven Decisions with Confidence</h3>
                <p>
                  I never operate on a hunch. My data-driven approach empowers me to make strategic decisions based on real user behavior and insights, not guesswork. As a <span className="spn_1">Web Analytics Expert</span>, I offer comprehensive services that provide a clear understanding of your audience’s actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/*  Success  */}
       <div className="container content-section dv-7">
        <div className="upr_cnt12 text-center text-white">
          <h2>Your Success Partner: Why Choosing Me Makes Sense</h2>
          <p>Trust me to optimize your online performance with precision analytics.</p>
        </div>
        <div className="row align-items-center">
          {/* YouTube Video */}
          <div className="col-lg-6 mb-4 youtube-video">
            <div style={{ position: 'relative', width: '560px', height: '315px' }}>
              <a href="https://www.youtube.com/watch?v=5cJOeSlWZ7Y" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/YouTube.png"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                  alt="YouTube Thumbnail"
                />
              </a>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/5cJOeSlWZ7Y"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'none' }}
                title="YouTube Video"
              ></iframe>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6">
            <h3 className="highlight">Hi, I'm Eric Case</h3>
            <p className="gag_1">
              Specializing in Google Analytics and Google Ads
              <img className="inlineimg1" src="/images/inline.png" alt="Description of image" />
            </p>
            <p>
              As your dedicated Success Partner, I integrate expertise and innovation to provide actionable insights that drive your business forward. Whether you're looking to improve website performance, enhance marketing strategies, or refine customer engagement, I am committed to your success.
            </p>

            <p>
              Whether you're seeking to optimize performance, refine your digital strategy, or enhance customer engagement, explore my comprehensive range of <span className="spn_1">Data Analytics Services</span> to optimize performance, refine your digital strategy, and elevate customer engagement. Contact me today to schedule a consultation and discover how I can help maximize your online potential with personalized <br></br><span className="spn_1">Data Analytics Consulting.</span>
            </p>

            <p className='sub-p'>Let's connect to help your business thrive.</p>

            {/* Stats */}
            <div className="d-flex justify-content-between mt-4">
              <div className="stats">
                Experience
                <span className="stats-number">10+</span>
              </div>
              <div className="stats">
                Projects Delivered
                <span className="stats-number">250+</span>
              </div>
              <div className="stats">
                Happy Clients
                <span className="stats-number">90+</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Drive Business Growth with Advanced Web & Data Analytics Services */}
      <div className="container sec_4">
        <div className="upr_cnt12 icnbx_contnt32 text-center text-white">
          <h2>
            Drive Business Growth with <br />
            Advanced Web & Data Analytics Services
          </h2>
          <p>
            I specialize in setting up and configuring essential digital analytics tools to optimize your online presence. Enhancing your website’s performance requires the right digital analytics services and expertise. Here’s how I can help you achieve this with my digital marketing services:
          </p>
        </div>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="icon-box">
                <img src="/images/one.png" alt="Google Analytics Setup" className="service-logo" />
              </div>
              <div className="number-box">01</div>
              <h3>Google Analytics Setup & Configuration</h3>
              <p>By implementing Google Analytics, I can accurately track your website traffic, user behavior, and conversions. This setup provides you with valuable insights into how visitors interact with your site, helping you make data-driven decisions.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="icon-box">
                <img src="/images/two.png" alt="Google Tag Manager Integration" className="service-logo" />
              </div>
              <div className="number-box">02</div>
              <h3>Google Tag Manager Integration</h3>
              <p>Integrating Google Tag Manager streamlines your tag management process and enhances data collection across your website, allowing you to better understand user interactions and events crucial for understanding user journeys.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="icon-box">
                <img src="/images/three.png" alt="Google Search Console Optimization" className="service-logo" />
              </div>
              <div className="number-box">03</div>
              <h3>Google Search Console Optimization</h3>
              <p>Connecting Google Search Console enables you to monitor and optimize your website's search performance. I utilize search analytics data to improve keyword targeting, click-through rates, and overall SEO strategy.</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="icon-box">
                <img src="/images/four.png" alt="Looker Studio Implementation" className="service-logo" />
              </div>
              <div className="number-box">04</div>
              <h3>Looker Studio Implementation Services</h3>
              <p>Implementing Looker Studio allows you to visualize and analyze data from Google Analytics and other sources effectively. I customize reports and dashboards to help you understand complex data sets and identify trends.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="icon-box">
                <img src="/images/five.png" alt="Google Ads Optimization" className="service-logo" />
              </div>
              <div className="number-box">05</div>
              <h3>Google Ads Optimization Services</h3>
              <p>Optimizing your Google Ads campaigns is crucial for maximizing your ROI. I analyze your ad performance, identify high-performing keywords, and adjust bids to ensure your ads reach the right audience and achieve high click-through rates.</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <div className="icon-box">
                <img src="/images/six.png" alt="Conversion Optimization Services" className="service-logo" />
              </div>
              <div className="number-box">06</div>
              <h3>Conversion Optimization Services</h3>
              <p>Conversion optimization services help you convert more visitors into leads and customers. I use data-driven techniques to enhance user experience and increase the performance of your website.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Buttons */}
     <div className='img-bg-clr'>
     <div className="bg-color">
          <img src="/images/Frame.png"/>
      </div>
<div className='laptop-sec' style={{position: 'relative'}}>
<div className="upr_cnt12 max_widt1 text-center text-white">
  <h2>Web & Data Analytics Project Showcase</h2>
  <p>Explore my web and data analytics project showcase! As a data analytics specialist, I am excited to present some of my most impactful projects, demonstrating my expertise in  <span class="spn_1">digital marketing analytics</span> and I have consistently delivered data-driven solutions that empower clients to achieve remarkable success.</p>
  </div>
<button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <Image src="/images/left1.png" alt="Previous" width={22} height={22} />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <Image src="/images/right1.png" alt="Next" width={22} height={22} />
        <span className="visually-hidden">Next</span>
      </button>
      <div className="laptopFrame">
        
        <div className="laptopScreen">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : 'false'}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="carousel-inner">
              {images.map((src, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
     {/* Review Carousel Section */}
     <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="upr_cnt12 max_widt1 text-center text-white">
          <h2>Hear What My Clients Have to Say</h2>
          <p>
            Discover what my satisfied clients have to say about my web analytics services and data analytics services. I take pride in delivering exceptional client service and greatly value their feedback.
          </p>
        </div>
        
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center rv_box1">
              <div className="col-lg-5 review-box">
                <div className="review-author">Mike Davis</div>
                <div className="review-role">Bonjoon Ku, CEO</div>
                <p className="review-content">
                  Working with Eric was a great experience. Their advertising campaigns were expertly crafted. Eric is a highly skilled and professional individual, and I would not hesitate to work with them again. I wholeheartedly recommend him to anyone looking for an exceptional advertising campaign. Thank you for the fantastic work!
                </p>
                <div className="rating-stars">★★★★★</div>
              </div>
              <div className="col-lg-5 review-box">
                <div className="review-author">Jake</div>
                <div className="review-role">Bonjoon Ku, CEO</div>
                <p className="review-content">
                  Eric was easy to communicate with, responsive and knowledgeable with all things Google. I am very impressed with the work that he did in setting up our GA and GTM for our website. I will be using Eric again for SEO and Google Adwords advice and implementation as our website builds traction.
                </p>
                <div className="rating-stars">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-lg-5 review-box">
                <div className="review-author">Anna Smith</div>
                <div className="review-role">CEO, Tech Solutions</div>
                <p className="review-content">
                  Eric is a wonderful professional to work with. He delivers results that consistently exceed expectations. I would highly recommend his services to anyone looking for real digital marketing expertise.
                </p>
                <div className="rating-stars">★★★★★</div>
              </div>
              <div className="col-lg-5 review-box">
                <div className="review-author">John Carter</div>
                <div className="review-role">COO, Web Innovations</div>
                <p className="review-content">
                  Eric's dedication to his work is outstanding. His detailed understanding of Google Analytics and ad strategies helped our business achieve significant growth.
                </p>
                <div className="rating-stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Contact Section */}
      <div className="container">
        <div className="contact-section row">
          <div className="contact-info col-md-5">
            <div className="ang_1">
              <h3>Get In Touch</h3>
              <p>
                For Web Analytics and Google Analytics services to make data-driven decisions that enhance your business growth.
              </p>
            </div>
            <img className="objct" src="/images/object.png" alt="Object" />
          </div>

          <div className="col-md-7">
            <form className="fom_1">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Name*" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" placeholder="E-mail*" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-block snd_msg1">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer container">
        <div className="footer-container">
          {/* Footer Logo */}
          <div className="footer-logo">
            <a className="navbar-brand1" href="#">
              <img className="logo" src="/images/log.png" alt="Logo" />
            </a>
          </div>

          {/* Footer Navigation */}
          <div className="footer-nav d-flex">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Showcase</a>
            <a href="#">Testimonial</a>
            <a href="#">Contact</a>
          </div>

          {/* Footer Email */}
          <div className="footer-email">
            <img src="/images/mail.png" alt="Mail Icon" />
            <a href="mailto:info@ericanalytics.net" className="text-white mail_ft1">info@ericanalytics.net</a>
          </div>
        </div>

        <div className="line">
          <img src="/images/line.png" alt="Line" />
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#"><img className="scl" src="/images/fb.png" alt="Facebook" /></a>
          <a href="#"><img className="scl" src="/images/in.png" alt="LinkedIn" /></a>
          <a href="#"><img className="scl" src="/images/insta.png" alt="Instagram" /></a>
          <a href="#"><img className="scl" src="/images/you.png" alt="YouTube" /></a>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          Copyright © 2024. All rights reserved
        </div>
      </footer>
    </div>
    </>
  );
}
