// import Image from "next/image";
// import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Slider from "react-slick";
// import { Button, Flex } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Modal from "../../components/modal/free-quote";
import ModalPricing from "../../components/modal/calculate-pricing";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";

import { useRouter } from "next/router";

export default function Home() {
  const [tab, setTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [openPricing, setOpenPricing] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc);
  };
  const handleGetQuoteClick = (e) => {
    setOpen(true);
  };
  const handleGetPricingClick = (e) => {
    setOpenPricing(true);
  };
  useEffect(() => {
    console.log(open, "open");
  }, [open]);

  const closeImage = () => {
    setSelectedImage(null);
  };

  const tabsArr = [
    {
      title: "all",
      images: [
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb1.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb3.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb5.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb1.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb3.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb5.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb1.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb3.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb5.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb2.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb4.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/iso_thumb6.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb2.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb4.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb6.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb2.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb4.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb6.jpg",
      ],
    },
    {
      title: "android",
      images: [
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb1.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb3.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/android_thumb5.jpg",
      ],
    },
    {
      title: "ios",
      images: [
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb1.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb3.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb5.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb2.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/ios_thumb4.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/iso_thumb6.jpg",
      ],
    },
    {
      title: "games",
      images: [
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb1.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb3.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb5.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb2.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb4.jpg",
        "https://www.applistix.com/lp-app-development/assets/images/game_thumb6.jpg",
      ],
    },
  ];
  const carouselArr = [
    {
      img: "https://www.applistix.com/lp-app-development/assets/images/ts-1.png",
      review: `“Mobile apps can’t get any better. Sophisticated, well-structured
      and user-friendly apps which are sure to leave you in awe of
      Applistix’s brilliance.”`,
      author: "Joe Young ",
      job: "CEO – Software House",
    },
    {
      img: "https://www.applistix.com/lp-app-development/assets/images/ts-3.png",
      review: `“Applistix has definitely embraced the essence of its name. I gave them a simple outline and they transformed it into an impeccably creative app.”`,
      author: "Rebecca Miles ",
      job: "Creative Manager – Ad Agency",
    },
    {
      img: "https://www.applistix.com/lp-app-development/assets/images/ts-4.png",
      review: `“From initiating the idea to its completion, amazing execution! Applistix made a promise and they delivered on it. Can’t wait to use their services again.”`,
      author: "June Wright ",
      job: "Co-Founder – Social Enterprise",
    },
    {
      img: "https://www.applistix.com/lp-app-development/assets/images/ts-2.png",
      review: `“Professionalism and commitment reflects from their work. By far the friendliest people to work with. Hats off to Applistix.”`,
      author: "Andrew McNeal  ",
      job: "Owner – Fast Food Chain",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settingsSecond = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dummyImages = [
    "https://www.applistix.com/lp-app-development/assets/images/mb-slider-full2.jpg",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500",
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const handleTabClick = (title) => {
    setTab(title);
  };

  return (
    <div>
      <Modal open={open} setOpen={setOpen} />
      <ModalPricing open={openPricing} setOpen={setOpenPricing} />
      <div className="text-[red] banner ">
        <div className="md:max-w-[1170px] max-w-full mx-auto">
          <header className="sm:pt-[10px] pt-[20px]">
            <div class="container  relative">
              <div class="row flex justify-between md:items-start items-center smpx-0 px-5 ">
                <div class="">
                  <a href="/">
                    <img
                      className="w-[60px] object-contain"
                      src="https://diginsy.com/wp-content/uploads/2023/06/logo-3.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="md:block hidden">
                  <a
                    href="#"
                    class="btn-red"
                    name="0"
                    data-fancybox=""
                    data-src="#popupform"
                    title="Get a Quote"
                    onClick={handleGetQuoteClick}
                  >
                    Get a Quote
                  </a>
                </div>

                <div
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  className="md:hidden block bg-[#c52026] p-2 h-[44px]"
                >
                  {/* <RxHamburgerMenu size={30} /> */}
                  {isMobileNavOpen ? (
                    <FaTimes size={30} className="text-white text-lg" />
                  ) : (
                    <RxHamburgerMenu size={30} />
                  )}
                </div>
              </div>
              {isMobileNavOpen && (
                <div className="md:hidden block top-0 left-0 w-full h-screen bg-[#000]">
                  <ul className="flex flex-col items-center justify-center h-full">
                    <li>
                      <a href="#" className="text-lg font-semibold py-2">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-semibold py-2">
                        Link 2
                      </a>
                    </li>
                    {/* Add more mobile navigation links as needed */}
                  </ul>
                </div>
              )}
            </div>
          </header>

          <div className="sm:py-[120px] py-[40px] smpb-0 pb-[40px] md:px-0 px-3">
            <h1 className="text-center sm:text-[56px] text-[20px]">
              <span className="banner-span">Turning incredible </span> <br />
              <em> mobile app development</em> ideas to reality
            </h1>

            <p>We Want Your Mobile App to Stand Out at First Glance</p>

            <div className="flex md:flex-row flex-col justify-center">
              <a
                href="javascript:;"
                class="btn-hero-1 uppercase"
                name="0"
                data-fancybox=""
                data-src="#popupform"
                title="GET A FREE QUOTE"
                onClick={handleGetQuoteClick}
              >
                Get A Free Quote
              </a>

              <a
                href="javascript:;"
                class="btn-hero-2 md:ml-2 ml-0 sm:mt-[50px] mt-[40px] uppercase"
                name="0"
                data-fancybox=""
                data-src="#popupform"
                title="GET A FREE QUOTE"
                onClick={handleGetPricingClick}
              >
                Calculate Pricing
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}

      <section class="hm-col1 flex md:flex-row flex-col md:px-0 px-5">
        <div class="col-md-6 md:text-left text-center">
          <div class="main-content">
            <div class="text-block">
              <h2 class="text-block-heading">
                Delivering innovative and top-tier mobile application solutions.
              </h2>
              <p>
                Design, develop and create amazing applications for smartphones,
                tablets or both. At Applistix we have got it all covered, no
                matter the platform it is to be built on or the device it is to
                be used in conjunction with. Applistix is your ultimate gateway
                for exceptional mobile application development while also
                providing prolific games and web development services.
              </p>
            </div>
            <div class="text-block">
              <h2 class="text-block-heading">
                The Best in the Mobile App Development Business
              </h2>
              <p>
                Our team of ingenious designers and mobile app programmers
                strive tirelessly to deliver beyond your expectations. We don’t
                just claim it, we are the best mobile app development company
                and our work seconds that. At Applistix our mission statement is
                to provide the best mobile app development solutions.
              </p>
              <p>
                The Mobile app developers in our team have extensive involvement
                in generating high performing results. Our mobile app developers
                carefully transformative and include rich &amp; versatile
                applications for all the imperative stages, making us the best
                mobile app development company there is! Applistix has immense
                experience when it comes to great UX and UI Expertise, our
                mobile app developers follow the do’s and don’ts from Apple and
                Google to build designs that are easy to adopt and a pleasure to
                use.
              </p>
            </div>
            <ul class="social-link">
              <li class="first">
                <a href="javascript:;">
                  <i class="fa fa-apple" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-android" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-windows" aria-hidden="true"></i>
                </a>
              </li>
              <li class="last">
                <a href="javascript:;">
                  <i class="fa fa-gamepad" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6 pd-left-0">
          <Slider {...settings}>
            {dummyImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section>
        <div class="second-main-content sm:text-left text-center pb-[30px]">
          <div class="text-block">
            <h2 class="text-block-heading">
              We Create Mobile Apps That Take Users by Storm
            </h2>
            <p className="text-[#7d7d7d]">
              Our mobile app developers and mobile app development team includes
              senior business consultants and analysts, UX experts and engineers
              who are proficient and fully capable of building native and
              cross-platform mobile applications that take users by storm.
            </p>
          </div>
          <div class="text-block">
            <h2 class="text-block-heading">Ideation and Strategy</h2>
            <p className="text-[#7d7d7d]">
              Once we receive an order, our mobile app developer’s sit down and
              understand all the minor and major expectations that our clients
              expect from us. We study the ins and outs of the idea and devise a
              technical solution with an eye for a future growth. We craft our
              creation with a unilateral goal: To dedicate ourselves and
              innovate digital solutions which satiate our customers and not
              merely deliver a product but present them with a scintillating
              masterpiece. With our hard work and persistence, we now stand as a
              leader in the industry of Mobile app development.
            </p>
            <br />
            <p className="text-[#7d7d7d]">
              Applistix is transparent in process and keeps customer constantly
              at ease, no matter which way you go – native or cross-platform –
              Our mobile app experts will help you figure out what works best
              for your product. Call Applistix now and talk about your project
              in detail.
            </p>
          </div>
        </div>
      </section>

      {/* third Section */}
      <section class="process">
        <div class="container md:px-0 px-3 max-w-[1170px] mx-auto">
          <h2 className="">
            Uniform process to create <br /> immaculate &amp; exhilarating
            experiences{" "}
          </h2>
          <p class="">
            Anything to Everything; our 4-Step process is strategically designed
            to guide <br />
            businesses &amp; provide them the best there is.{" "}
          </p>

          <div className=" justify-center md:flex hidden">
            <img src="/images/tree-img.png" />
          </div>
          <div class="process-list process-list-slider owl-carousel owl-loaded mt-[30px]">
            <div class="owl-stage-outer">
              <div
                class="owl-stage flex md:flex-row flex-col"
                // style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1140px;"
              >
                <div
                  class="owl-item active"
                  // style="width: 285px;"
                >
                  <div class="item">
                    <div className="flex flex-row-reverse justify-between items-center relative mr-[15px]">
                      <span class="count">01</span>
                      <h4>Design</h4>
                    </div>
                    <p>
                      We design intuitive mobile app designs for unparalleled
                      user experience. Our strength lies in creating solutions
                      that keep users coming back for more.
                    </p>
                  </div>
                </div>
                <div
                  class="owl-item active"
                  //  style="width: 285px;"
                >
                  <div class="item">
                    <div className="flex flex-row-reverse justify-between items-center relative mr-[15px]">
                      <span class="count">02</span>
                      <h4>Develop</h4>
                    </div>
                    <p>
                      With cutting edge technology and frameworks we deliver
                      high end solutions at fraction of the cost. Our strength
                      lies in delivering the premium quality.
                    </p>
                  </div>
                </div>
                <div
                  class="owl-item active"
                  // style="width: 285px;"
                >
                  <div class="item">
                    <div className="flex flex-row-reverse justify-between items-center relative mr-[15px]">
                      <span class="count">03</span>
                      <h4>Test</h4>
                    </div>
                    <p>
                      We are here to provide the best. To ensure our commitment
                      to you remains spotless we implement every measure hence
                      also avoiding any inconvenience.
                    </p>
                  </div>
                </div>
                <div
                  class="owl-item active"
                  // style="width: 285px;"
                >
                  <div class="item">
                    <div className="flex flex-row-reverse justify-between items-center relative mr-[15px]">
                      <span class="count">04</span>
                      <h4>Launch</h4>
                    </div>
                    <p>
                      With sheer determination and passion we produce
                      benchmarks, while assisting you in managing your resource
                      throughout the development and deployment process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="owl-dots disabled"></div>
          </div>
        </div>
      </section>

      {/* fourth section */}

      <section class="portfolio down-section">
        <div class="container md:max-w-[1170px] max-w-[full] md:px-0 px-3 mx-auto">
          <h2>Our Portfolio</h2>
          <p className="">
            We stay true to our values and deliver best mobile game app
            development solutions, which are not only coherent and comprehensive
            but also, add extra value to your business.
          </p>

          {/* <div className="grid grid-cols-4 gap-8 max-w-[400px] mx-auto">
            {tabsArr.map((tabItem) => (
              <button
                key={tabItem.title}
                className={`btn fil-cat uppercase w-fit ${
                  tab === tabItem.title ? "active" : ""
                }`}
                onClick={() => handleTabClick(tabItem.title)}
              >
                {tabItem.title}
              </button>
            ))}
          </div> */}
          <div className="grid grid-cols-4 md:gap-8 md:max-w-[400px] max-w-full mx-auto">
            {tabsArr.map((tabItem) => (
              <button
                key={tabItem.title}
                className={`btn fil-cat uppercase w-fit ${
                  tab === tabItem.title ? "active fil-cat-hover" : ""
                }`}
                onClick={() => handleTabClick(tabItem.title)}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 md:max-w-[700px] max-w-full mx-auto mb-[80px]">
            {tabsArr
              .find((tabItem) => tabItem.title === tab)
              ?.images.map((imgSrc, idx) => (
                // <div key={idx}>
                <img
                  className="w-[386px] md:h-[468px] h-[214px] object-cover cursor-pointer"
                  src={imgSrc}
                  alt={`Left Image ${idx}`}
                  onClick={() => openImage(imgSrc)}
                  // width={386}
                />
                // </div>
              ))}
          </div>
          {selectedImage && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="max-w-[700px] mx-auto p-4 bg-white rounded-lg">
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  className="w-full h-auto"
                />
                <button
                  onClick={closeImage}
                  className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* <Flex gap="small" wrap="wrap">
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Flex> */}

          <div>
            <a
              href="javascript:;"
              class="btn-blue-border various uppercase"
              name="0"
              data-fancybox=""
              data-src="#popupform"
              title="Get a Quote"
              onClick={handleGetQuoteClick}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* fifth section */}
      <section class="services md:px-0 px-3">
        <h2>
          We've Got Your Back{" "}
          <span>
            {" "}
            When you have an idea, we make it workable, <br />
            practical and profitable!
          </span>{" "}
        </h2>

        <div class="services-slider flex flex-wrap owl-carousel">
          <div class="item col-md-4">
            <div>
              <i class="icon-concept"></i>
              <h5>Concept Building</h5>
              <p>
                With thorough research and analysis, we set apart the goals of
                your app and lay down its core concept.{" "}
              </p>
            </div>
          </div>
          <div class="item col-md-4">
            <div>
              <i class="icon-design"></i>
              <h5>Design</h5>
              <p>
                Our team of expert designers work exert their skills to render
                contemporary design solutions that generate an amazing digital
                experience.
              </p>
            </div>
          </div>
          <div class="item col-md-4">
            <div>
              <i class="icon-development"></i>
              <h5>Development</h5>
              <p>
                The utmost goal of our app developers is to build intuitive and
                innovative mobile apps that deliver great results for startups
                and enterprises.{" "}
              </p>
            </div>
          </div>

          <div class="item col-md-4">
            <div>
              <i class="icon-testing"></i>
              <h5>Testing</h5>
              <p>
                We do not compromise on quality testing, as we are crucial in
                rectifying core problems before we launch your app.
              </p>
            </div>
          </div>
          <div class="item col-md-4">
            <div>
              <i class="icon-ios"></i>
              <h5>Deployment</h5>
              <p>
                With constant assistance in every phase, we identify as an app
                development company that is steadfast in deploying your app to
                the right platform.{" "}
              </p>
            </div>
          </div>
          <div class="item col-md-4">
            <div>
              <i class="icon-marketing"></i>
              <h5>Marketing</h5>
              <p>
                Once your app is launched, we aid you in forming the right
                marketing strategy for your mobile app that reaches out to your
                potential audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sixth section */}
      <section class="footer-form">
        <div class="container md:max-w-[980px] max-w-full mx-auto pt-[23px] pb-[60px] md:pb-[120px] md:px-[40px] px-[15px] bg-[#fff]">
          <div class="row">
            <div class="col-md-10 col-md-push-1">
              <h2>Feel Free to Contact Us</h2>
              <p>
                Discuss your app idea with our consultants and we'll help you
                transform them to multi-million dollar reality.{" "}
                <br className="md:block hidden" />
                It's Free!
              </p>

              <form className="flex md:flex-row flex-col justify-between md:max-w-[700px] max-w-full mx-auto md:mt-[50px] mt-[30px]">
                <div className="md:w-[40%] w-full flex flex-col">
                  <input
                    type="text"
                    class="input-type"
                    required=""
                    name="cn"
                    placeholder="Your Name"
                    aria-required="true"
                  />

                  <input
                    type="email"
                    class="input-type"
                    required=""
                    name="em"
                    placeholder="Your Email"
                    aria-required="true"
                  />

                  <PhoneInput
                    country={"pk"}
                    class="input-type"

                    // value={this.state.phone}
                    // onChange={(phone) => this.setState({ phone })}
                  />
                </div>
                <div className="md:w-[58%] w-full">
                  <textarea
                    className="input-type input-type-textarea"
                    // rows="9" // Set the number of visible rows
                    placeholder="Enter a brief description of your App Project"
                  />
                </div>
              </form>

              <p class="form_tagline mt-[30px] text-[12px]">
                {" "}
                <input type="checkbox" name="agree" /> &nbsp; To receive our
                weekly Newsletter/SMS and offers check here. You can unsubscribe
                at any time.
              </p>

              <div className="flex justify-center items-center">
                <a
                  href="javascript:;"
                  class="btn-hero-1 uppercase md:w-[292px] w-full text-[23px] flex justify-center items-center"
                  name="0"
                  data-fancybox=""
                  data-src="#popupform"
                  title="GET A FREE QUOTE"
                  style={{
                    fontSize: "23px",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "0px",
                  }}
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* seventh section */}
      <section class="testimonial-col">
        <div class="container max-w-[1170px] mx-auto">
          <h2>Proud Customers</h2>
          <p>
            We take pride in delivering novel application designs and engaging{" "}
            <br className="md:block hidden" />
            experiences to clients globally.
          </p>

          <Slider {...settings}>
            {carouselArr.map((i) => {
              return (
                <div className="flex flex-col justify-center items-center slick-item">
                  <i>
                    <img src={i.img} alt="stuart" />
                  </i>
                  <p className="carousel-review">{i.review}</p>
                  <span class="author-name">
                    {i.author} <strong>{i.job}</strong>
                  </span>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* carousel bottom section */}
      <section class="client mt-[30px] pb-[40px]">
        <div class="container max-w-[1170px] mx-auto">
          <div class="row grid md:grid-cols-6 grid-cols-3 md:gap-8 gap-6 ">
            <div class="col-md-2 flex justify-center">
              <img
                src="https://www.applistix.com/lp-app-development/assets/images/client-1.jpg"
                alt="hotel-tonight"
              />
            </div>
            <div class="col-md-2 flex justify-center">
              <img
                src="https://www.applistix.com/lp-app-development/assets/images/client-2.jpg"
                alt="travelocity"
              />
            </div>
            <div class="col-md-2 flex justify-center">
              <img
                src="https://www.applistix.com/lp-app-development/assets/images/client-3.jpg"
                alt="nascar"
              />
            </div>
            <div class="col-md-2 flex justify-center">
              <img
                src="https://www.applistix.com/lp-app-development/assets/images/client-4.jpg"
                alt="reckitt"
              />
            </div>
            <div class="col-md-2 flex justify-center">
              <img
                src="https://www.applistix.com/lp-app-development/assets/images/client-5.jpg"
                alt="honeywell"
              />
            </div>
            <div class="col-md-2 flex justify-center">
              <img
                src="https://www.applistix.com/lp-app-development/assets/images/client-6.jpg"
                alt="nvidia"
              />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="md:px-0 px-5">
        <div class="container max-w-[1170px] mx-auto ">
          <div className="flex flex-col items-center justify-center">
            <h2>Let’s work together!</h2>

            <a
              //   style={{ marginTop: "20px" }}
              href="javascript:;"
              class="btn-footer uppercase mt-[10px] "
              name="0"
              data-fancybox=""
              data-src="#popupform"
              title="GET A FREE QUOTE"
              onClick={handleGetQuoteClick}
            >
              Submit your Brief
            </a>
          </div>
          <div class="row md:mt-[100px] mt-[20px] md:py-0 pb-[50px] pt-[30px]">
            <div class="col-md-12 disclaimer flex md:flex-row flex-col items-center justify-between">
              <div class="col-md-4">All Rights Reserved © Applistix </div>
              <div class="col-md-8 text-right">
                <a href="https://www.applistix.com/lp-app-development/terms-and-conditions/">
                  Terms of use
                </a>{" "}
                |
                <a href="https://www.applistix.com/lp-app-development/privacy-policy/">
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
