import React from 'react'
import img1 from "../../assets/multipleImg/arrival1.png";
import img2 from "../../assets/multipleImg/arrival2.png";
import img3 from "../../assets/multipleImg/arrival3.png";
import img4 from "../../assets/multipleImg/arrival4.png";
import HomeTitle from '../../atoms/HomeTitle';
const NewArrival = () => {
  let images = [
    { src: img1, name: "Knitted Joggers", },
    { src: img2, name: "Full Sleeve", },
    { src: img3, name: "Active T-shirts", },
    { src: img4, name: "Urban Shirts", }
  ]

  return (
    <section className="limelight container mx-auto">
      <HomeTitle title="New Arrival" />

      <div className=" grid place-items-center ">
        <div className=" flex flex-wrap w-full justify-center gap-y-10 p-4 gap-x-20 ">
          {images.map((item, index) => {
            return (

              <div className="w-72 max-[1523px]:w-60 h-96 " key={index}>
                <div className=" w-72 max-[1523px]:w-60 h-max">
                  <img src={item.src} className="h-72 rounded w-full" />
                </div>
                <div className=" relative h-max p-2 flex justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </section >
  )
}

export default NewArrival