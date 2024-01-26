'use client'

const UserSubmissionCard = ({ id, name, author, pending, denied, authorVisible }) => {

  const getStatusAndColor = () => {
    if (pending && !denied) {
      return { text: 'Pending', color: 'text-yellow-500' };
    } else if (pending && denied) {
      return { text: 'Denied', color: 'red' };
    } else if (!pending && !denied) {
      return { text: 'Approved', color: 'green' };
    } else if (!pending && denied) {
      return { text: 'Denied', color: 'red' };
    }
  };

  const statusInfo = getStatusAndColor();

  return (
    <div className="bg-white m-2 p-4 rounded-md shadow-md max-w-[25rem] min-w-[25rem]">
      <div className="flex justify-between">
        <h2 className="m-0 text-2xl font-semibold">{name}</h2>
        <span className={`m-0 border-[1px] p-1 border-black rounded-md font-medium ${statusInfo.color}`}>{statusInfo.text}</span>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <span className="text-gray-700">{author}</span>
        </div>
      </div>
    </div>
  )
}

export default UserSubmissionCard