import React from "react";
import BillingDetails from "../../components/CheckoutComponent/BillingDetails";
import OrderSummary from "../../components/CheckoutComponent/OrderSummary";
import ShippingAddress from "../../components/CheckoutComponent/ShippingAddress";
import ShippingMethod from "../../components/CheckoutComponent/ShippingMethod";
import Paymentmethod from "../../components/CheckoutComponent/Paymentmethod";
import HomeTitle from "../../atoms/HomeTitle";

const Checkout = () => {
    return (
        <div>
            <div className="">
                <div className="flex p-3 max-w-screen-2xl m-auto">
                    <HomeTitle title="Check Out" />
                </div>
            </div>
            <div >
                <div className="flex p-3 max-w-screen-2xl m-auto">
                    <div className=" px-8 lightBlack text-2xl non-italic font-semibold tracking-wide">
                        Billing details
                    </div>
                </div>
            </div>
            <div>
                <div >
                    <div className="max-w-screen-2xl max-[1536px]:w-full m-auto flex p-10  relative flex-row max-[1200px]:flex-col  ">
                        <BillingDetails />
                        <OrderSummary border="1px solid black" />
                    </div>
                </div>
            </div>
            <ShippingAddress />
            <ShippingMethod />
            <Paymentmethod />
        </div>
    );
};

export default Checkout;
