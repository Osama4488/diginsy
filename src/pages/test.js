import React, { Component } from "react";
import Slider from "react-slick";
import Animation from "../components/animation";
// export default class SimpleSlider extends Component {
//   render() {
//     const carouselArr = [
//       {
//         img: "https://www.applistix.com/lp-app-development/assets/images/ts-1.png",
//         review: `“Mobile apps can’t get any better. Sophisticated, well-structured
//         and user-friendly apps which are sure to leave you in awe of
//         Applistix’s brilliance.”`,
//         author: "Joe Young ",
//         job: "CEO – Software House",
//       },
//       {
//         img: "https://www.applistix.com/lp-app-development/assets/images/ts-3.png",
//         review: `“Applistix has definitely embraced the essence of its name. I gave them a simple outline and they transformed it into an impeccably creative app.”`,
//         author: "Rebecca Miles ",
//         job: "Creative Manager – Ad Agency",
//       },
//       {
//         img: "https://www.applistix.com/lp-app-development/assets/images/ts-4.png",
//         review: `“From initiating the idea to its completion, amazing execution! Applistix made a promise and they delivered on it. Can’t wait to use their services again.”`,
//         author: "June Wright ",
//         job: "Co-Founder – Social Enterprise",
//       },
//       {
//         img: "https://www.applistix.com/lp-app-development/assets/images/ts-2.png",
//         review: `“Professionalism and commitment reflects from their work. By far the friendliest people to work with. Hats off to Applistix.”`,
//         author: "Andrew McNeal  ",
//         job: "Owner – Fast Food Chain",
//       },
//     ];

//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           {carouselArr.map((i) => {
//             return (
//               <div className="flex flex-col justify-center items-center slick-item">
//                 <i>
//                   <img src={i.img} alt="stuart" />
//                 </i>
//                 <p>{i.review}</p>
//                 <span class="author-name">
//                   {i.author} <strong>{i.job}</strong>
//                 </span>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }

// import React from "react";

export default function Test() {
  const settingsSecond = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const dummyImages = [
    {
      img1: "/images/bg_img_1.jpg",
      img2: "/images/mobile mockup 1.png",
    },
    {
      img1: "/images/bg_img_2.jpg",
      img2: "/images/mobile mockup 2.png",
    },
    {
      img1: "/images/bg_img_3.jpg",
      img2: "/images/mobile mockup 3.png",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className={className}
        className="slick-second-prev "
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className={className}
        className="slick-second-next"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  return (
    <div>
      <div className=" banner relative">
        <a
          href="#"
          //   class="btn-red"
          className="btn-red top-quote md:block hidden"
          name="0"
          data-fancybox=""
          data-src="#popupform"
          title="Get a Quote"
          // onClick={handleGetQuoteClick}
        >
          Get a Quote
        </a>
        <div className="md:max-w-[1170px] max-w-full mx-auto">
          <header className="sm:pt-[10px] pt-[20px]">
            <div class="container  relative">
              <div class="row flex justify-between md:items-start pt-[20px] items-center smpx-0 px-5 ">
                <div class="">
                  <a href="/">
                    <img
                      className="w-[60px] object-contain"
                      src="https://diginsy.com/wp-content/uploads/2023/06/logo-3.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="md:block hidden"></div>

                <div
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  className="md:hidden block bg-[#c52026] p-2 h-[44px]"
                ></div>
              </div>
            </div>
          </header>

          <div className="sm:py-[120px] py-[40px] smpb-0 pb-[84px] md:px-0 px-3">
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
                // onClick={handleGetQuoteClick}
              >
                Get A Free Quote
              </a>

              <a
                href="javascript:;"
                class="btn-hero-2 md:ml-2 ml-0 mt-[40px] uppercase"
                name="0"
                data-fancybox=""
                data-src="#popupform"
                title="GET A FREE QUOTE"
                // onClick={handleGetPricingClick}
              >
                Calculate Pricing
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="hm-col1 flex md:flex-row flex-col md:px-0 px-5 relative">
        <div class="col-md-6 md:text-left text-center">
          <div class="main-content">
            <div class="text-block">
              <h2 style={{ fontWeight: "800" }} class="text-block-heading">
                Delivering innovative and top-tier mobile application solutions.
              </h2>
              <p className="mt-2">
                Design, develop and create amazing applications for smartphones,
                tablets or both. At Diginsy we have got it all covered, no
                matter the platform it is to be built on or the device it is to
                be used in conjunction with. Diginsy is your ultimate gateway
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
                and our work seconds that. At Diginsy our mission statement is
                to provide the best mobile app development solutions.
              </p>
              <p>
                The Mobile app developers in our team have extensive involvement
                in generating high performing results. Our mobile app developers
                carefully transformative and include rich &amp; versatile
                applications for all the imperative stages, making us the best
                mobile app development company there is! Diginsy has immense
                experience when it comes to great UX and UI Expertise, our
                mobile app developers follow the do’s and don’ts from Apple and
                Google to build designs that are easy to adopt and a pleasure to
                use.
              </p>
            </div>
          </div>
        </div>

        <div
          id="second-section-carousel-screen"
          class="md:second-section-carousel-screen col-md-6 pd-left-0 relative "
        >
          <Slider {...settingsSecond}>
            {dummyImages.map((image, index) => (
              <div className="check relative w-full">
                <div
                  className="absolute carousel-image-second relative w-full -top-[50px] -z-50 md:h-[900px] h-[600px]"
                  key={index}
                >
                  <img
                    className="w-full"
                    src={image.img1}
                    alt={`Slide ${index + 1}`}
                  />

                  <img
                    className="absolute top-[200px] md:left-[280px] left-[22px] md:w-auto md:h-auto w-[300px] h-[319px] object-contain transition-opacity duration-500 delay-500"
                    src={image.img2}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
