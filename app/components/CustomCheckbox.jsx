'use client'

import { useState } from "react";
import './CustomCheckbox.css';
import { FaCheck } from "react-icons/fa";

const CustomCheckbox = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onChange();
    };


  return (
    <div className={`custom-checkbox ${isChecked ? 'bg-green-500 border-green-500' : 'border-black'}`} onClick={handleCheckboxChange}>
      {isChecked && <FaCheck className="checkmark"/>}
    </div>
  );
};

export default CustomCheckbox;