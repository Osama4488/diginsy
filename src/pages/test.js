import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
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
    };
    return (
      <div>
        <Slider {...settings}>
          {carouselArr.map((i) => {
            return (
              <div className="flex flex-col justify-center items-center slick-item">
                <i>
                  <img src={i.img} alt="stuart" />
                </i>
                <p>{i.review}</p>
                <span class="author-name">
                  {i.author} <strong>{i.job}</strong>
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
