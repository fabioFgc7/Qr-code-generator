import { FaDownload } from "react-icons/fa";

export const DownloadImage = ({ handleClick }) => {
  return (
    <div className='flex'>
      <button
        type='submit'
        className='w-full bg-blue-600 text-lg  rounded-md text-slate-200  hover:bg-blue-300 p-2 hover:text-slate-900'
        onClick={handleClick}>
        <FaDownload className='mr-auto ml-auto' /> Download PNG
      </button>
    </div>
  );
};
