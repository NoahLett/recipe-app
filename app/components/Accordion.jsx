'use client'

import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { useState } from "react";


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`p-4 cursor-pointer ${index !== items.length - 1 ? 'border-b border-slate-300' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <div className="flex justify-between items-center text-lg">
                <div>{item.title}</div>
                <div>{activeIndex === index ? <FaChevronDown className="text-lg" /> : <FaChevronUp className="text-lg" />}</div>
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-slate-200 text-lg"><span>{item.content}</span></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;