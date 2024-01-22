'use client'

import { useState } from "react";
import { PiCircleThin } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

const CustomCheckbox = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
        onChange();
    };


  return (
    <div className="mx-2">
      { isChecked ? (
        <FaCheckCircle className="text-3xl text-green-500 hover:cursor-pointer" onClick={handleCheckbox} />
      ) : (
        <PiCircleThin className="text-3xl hover:cursor-pointer" onClick={handleCheckbox} />
      )}
    </div>
  );
};

export default CustomCheckbox;