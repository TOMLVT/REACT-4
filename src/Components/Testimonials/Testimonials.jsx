import Slider from "react-slick";
import { TestimonialsData } from "../../mockData/data";


const Testimonials = () => {

    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div className="py-14 mb-10">
        <div className="container">
            {/* header section */}
            <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
                <h1 className="text-4xl font-bold">What Are The Costumer Saying About Us</h1>
            </div>
            {/* Cards  */}
            <div>
                <Slider {...setting}>
                    {TestimonialsData.map((data) => (
                        <div key={data.id} className="my-6">
                           <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10">
                           <div className="flex justify-start items-center gap-5">
                                <img src={data.img} alt="" className="w-16 h-16 rounded-full"/>
                                <div>
                                    <p className="font-bold text-xl text-black-80">{data.name}</p>
                                    <p>{data.name}</p>
                                </div>
                            </div>

                            <div className="py-6 space-y-4"> 
                                <p className="text-gray-500 text-sm">{data.text}</p>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                           </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
