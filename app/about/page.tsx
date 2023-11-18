"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import aboutImg from "@/assets/images/about/about_img.jpg";

// ------------

function About() {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="content-945 center-relative">
          {/* Person Information */}
          <div className="one_third">
            <div className="info-code">
              <p className="info-code-title">Founded</p>
              <p className="info-code-content">MCMLXXXII</p>
            </div>
            <div className="info-code">
              <p className="info-code-title">Art Director</p>
              <p className="info-code-content">James Edwin</p>
            </div>
            <div className="info-code">
              <p className="info-code-title">Headquarter</p>
              <p className="info-code-content">Nairobis</p>
            </div>
          </div>
          {/* Description text */}
          <div className="two_third last">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam culpa animi provident laborum. Vitae veritatis enim error dolor ut eum nesciunt minus totam cumque nulla adipisci, sapiente quaerat doloremque dolore ab! Exercitationem, eos ratione? Id, cupiditate. Tempore, obcaecati non!
            <br />
          </div>
          <div className="clear"></div>
          <br />
        </div>
        <div className="box-page-width content-1140 center-relative">
          <img className="aligncenter" src={aboutImg.src} alt="" />
        </div>
        <div className="content-945 center-relative">
          <br />

          {/* Text Slider */}
          <div className="testimonial-slider-holder relative">
            <Swiper
              pagination={{ clickable: true }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              speed={750}
              autoplay
              allowTouchMove={false}
              modules={[EffectFade, Pagination, Autoplay]}
              autoHeight
              id="textslider"
              className="testimonial-slider slider"
            >
              <SwiperSlide className="testimonial-content">
                The goal of a designer is to listen, observe, understand,
                sympathize, empathize, synthesize, and glean insights that
                enable him or her to make the invisible visible
              </SwiperSlide>
              <SwiperSlide className="testimonial-content">
                All architecture is shelter, all great architecture is the
                design of space that contains, cuddles, exalts, or stimulates
                the persons in that space
                <br />
              </SwiperSlide>
              <SwiperSlide className="testimonial-content">
                As an architect, you design for the present, with an awareness
                of the past, for a future which is essentially unknown.
                <br />
              </SwiperSlide>
            </Swiper>
          </div>

          <br />

          {/* Description text */}
          <div className="two_third">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, corrupti? Est quisquam sit cupiditate totam, sint repellendus aut laboriosam, in voluptate hic ipsa! Sequi nobis magni dolorum, ut possimus corporis nulla. At, similique rerum totam adipisci facilis necessitatibus exercitationem saepe?
            <br />
          </div>
          {/* Progress bars */}
          <div className="one_third last">
            <div className="progress_bar">
              <div className="progress_bar_title">PHOTOSHOP</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">A skill</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">A skill</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">A skill</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
}

export default About;
