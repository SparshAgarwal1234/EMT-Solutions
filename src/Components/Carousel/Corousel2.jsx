import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Corousel2.css";
export const SlidesCarousel2 = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <div className="heading_div">
        <h2>What Our Customers</h2> <h2>Are Saying</h2>
        <div className="span_hr"></div>
      </div>
      <ButtonBack className="corousel2_btn">&#8592;</ButtonBack>
      <ButtonNext className="corousel2_btn">&#8594;</ButtonNext>
      <div className="corousel_parent">
        <Slider className="carousel2_box_div">
          <Slide index={0}>
            <div className="parent_slides">
              <div className="child_slides">
                <p className="title_text">Rashmi Sirsath</p>
                <p className="para_text">
                  I would like to thank the website 'www.insurance.emt.com'
                  because of which i could get a good policy.
                </p>
              </div>
              <div className="child_slides">
                <p className="title_text">Ananth Narayan</p>
                <p className="para_text">
                  Thank you for facilitating and following up on the policy. It's
                  been a very pleasurable experience with you folks at
                  EMT Insurance.
                </p>
              </div>
              <div className="child_slides">
                <p className="title_text">Sonia Khanna</p>
                <p className="para_text">
                  Got a good deal without agent calling or speaking to anyone.
                </p>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            {" "}
            <div className="parent_slides">
              <div className="child_slides">
                <p className="title_text">Urvashi Solanki</p>
                <p className="para_text">
                  I did not even need help from an agent! This is very good!
                </p>
              </div>
              <div className="child_slides">
                <p className="title_text">Bhaskar Lokhande</p>
                <p className="para_text">
                  Thanks for correction done in time and really
                  Appreciated....! GOOD TO HAVE EMT INSURANCE..!! LIFE IS EASY
                  WITH YOU..!!
                </p>
              </div>
              <div className="child_slides">
                <p className="title_text">Neha Jain</p>
                <p className="para_text">
                  You are dong a great job. Proude to be costomer of
                  Polocibazar.
                </p>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            {" "}
            <div className="parent_slides">
              <div className="child_slides">
                <p className="title_text">Parag Singh</p>
                <p className="para_text">
                  The services provided by EMT Insurance are extremely helpful in
                  making the right choices. Overall I had a good experience with
                  EMT Insurance.
                </p>
              </div>
              <div className="child_slides">
                <p className="title_text">Shradha Sharma </p>
                <p className="para_text">
                  Very simple to use, user-friendly website.
                </p>
              </div>
              <div className="child_slides">
                <p className="title_text">Prabhat Yadav</p>
                <p className="para_text">
                  Thanking you very much for your support for getting our policy
                  quickly, I would appreaciate your work.
                </p>
              </div>
            </div>
          </Slide>
        </Slider>
      </div>
    </CarouselProvider>
  );
};
