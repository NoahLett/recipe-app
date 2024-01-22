'use client'

import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const CustomCheckbox = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
        onChange();
    };


  return (
    <div className="mx-2">
      { isChecked ? (
        <FaCircleCheck className="text-3xl text-green-500 border-black border-[3px] rounded-full hover:cursor-pointer bg-white" onClick={handleCheckbox} />
      ) : (
        <FaRegCircle className="text-3xl hover:cursor-pointer" onClick={handleCheckbox} />
      )}
    </div>
  );
};

export default CustomCheckbox;