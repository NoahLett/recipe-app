'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const AdminSubmissionCard = ({ id, name, author, authorVisible, pending, denied, ingredients, steps }) => {

  const router = useRouter();
  const [showIngredients, setShowIngredients] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [isChecked, setIsChecked] = useState(authorVisible);

  const handleChangeView = async () => {
    try {
      await fetch(`/api/change-user-view/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          includeTrue: isChecked,
        }),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdminView = async () => {
    console.log(id);
    try {
      await fetch(`/api/change-admin-view/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  const handleToggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <div className="bg-white m-2 p-4 rounded-md shadow-md max-w-[25rem] min-w-[25rem]">
      <div className="flex justify-end">
        <IoCloseOutline className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-150" onClick={handleAdminView} />
      </div>
      <div className="flex justify-between">
        <h2 className="m-0 text-2xl font-semibold">{name}</h2>
      </div>
      <div className="flex justify-around">
        <div className="my-2">
          <div className="flex items-center" onClick={handleToggleIngredients}>
            <p className="text-lg font-medium cursor-pointer">
              Ingredients
            </p>
            {showIngredients ? <FaChevronDown className="mx-2" /> : <FaChevronUp className="mx-2"/>}
          </div>
          <ul className={`list-disc ml-4 transition-all duration-300 ${showIngredients ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="my-2">
          <div className="flex items-center" onClick={handleToggleSteps}>
            <p className="text-lg font-medium cursor-pointer">
              Steps
            </p>
            {showSteps ? <FaChevronDown className="mx-2" /> : <FaChevronUp className="mx-2"/>}
          </div>
          <ol className={`list-decimal ml-4 transition-all duration-300 ${showSteps ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <span className="text-gray-700 mb-2">{author}</span>
          <div className="flex items-center">
            <label className="mr-3">Show Author</label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
        </div>
        <div className="flex justify-end m-2">
          <button className="bg-sky-300 py-1 px-2 border-[1px] border-sky-500 rounded-md" onClick={handleChangeView}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AdminSubmissionCard