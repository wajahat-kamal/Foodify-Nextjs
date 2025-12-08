'use client';
import React from "react";
import toast from "react-hot-toast";

function OrderHandlerButton({name}: any) {

   const orderHandler = (name: string) => {
    toast.success(`Your order for "${name}" has been placed!`)
   }

  return (
    <button onClick={() => orderHandler(name)} className="mt-4 bg-[#F0B100] hover:bg-[#d99c00] text-black font-semibold text-lg px-6 py-3 rounded-xl shadow-lg transition-all duration-300 w-fit">
      Order Now
    </button>
  );
}

export default OrderHandlerButton;
