import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/ProductSlice";
import { images } from "../../pages/AllArrays/Arrays";
const ProductData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  console.log(data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <div className="w-4/5">
        <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-10 p-4 ">
          {images.map((item, index) => {
            return (
              <div className="w-52 max-[1523px]:w-60 h-96 " key={index}>
                <div className="w-52 max-[1523px]:w-60 h-max">
                  <img src={item.src} className="h-72 rounded w-full" />
                </div>
                <div className="relative h-max p-2 flex justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.productName}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductData;
