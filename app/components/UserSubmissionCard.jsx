'use client'

import { useRouter } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

const UserSubmissionCard = ({ id, name, author, pending, denied, ingredients, steps }) => {

  const router = useRouter();

  const handleChangeView = async (e) => {
    try {
      await fetch(`/api/change-user-view/${id}`, {
        method: 'POST'
      })
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusAndColor = () => {
    if (pending && !denied) {
      return { text: 'Pending', color: 'text-yellow-500', borderColor: 'border-amber-500' };
    } else if (pending && denied) {
      return { text: 'Denied', color: 'text-red-600', borderColor: 'border-red-700' };
    } else if (!pending && !denied) {
      return { text: 'Approved', color: 'text-green-400', borderColor: 'border-green-400' };
    } else if (!pending && denied) {
      return { text: 'Denied', color: 'text-red-600', borderColor: 'border-red-700' };
    }
  };

  const statusInfo = getStatusAndColor();

  return (
    <div className="bg-white m-2 p-4 rounded-md shadow-md max-w-[25rem] min-w-[25rem]">
      <div className="flex justify-between">
        <h2 className="m-0 text-2xl font-semibold">{name}</h2>
        <IoCloseOutline className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-150" onClick={handleChangeView} />
      </div>
      <div className="flex justify-around">
        <div>
          <p className="text-lg font-medium">Ingredients</p>
          <ul className="list-disc ml-4">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg font-medium">Steps</p>
          <ol className="list-decimal ml-4">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <span className="text-gray-700">{author}</span>
        </div>
        <div>
        <span className={`m-0 border-[1px] p-1 ${statusInfo.borderColor} rounded-md font-medium ${statusInfo.color}`}>{statusInfo.text}</span>
        </div>
      </div>
    </div>
  )
}

export default UserSubmissionCard