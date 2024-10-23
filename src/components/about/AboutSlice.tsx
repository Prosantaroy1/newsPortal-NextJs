'use client'
import { aboutTeam } from "@/lib/aboutData";
// react carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamCard from "./TeamCard";

const AboutSlice = () => {
 
    // carousel
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1340 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1340, min: 768 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div>
            <Carousel arrows={true} autoPlay={true} autoPlaySpeed={3000} infinite responsive={responsive}>
                
                    {
                        aboutTeam.map((item)=>{
                            return (
                                <div key={item?.id}>
                                    <TeamCard item={item}/>
                                </div>
                            )
                        })
                    }
                
            </Carousel>
        </div>
    );
};

export default AboutSlice;