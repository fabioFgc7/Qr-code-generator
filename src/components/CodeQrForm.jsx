import React, { useState } from "react";
import { useEffect } from "react";
import { DownloadImage } from "./DownloadImage";
import { Loader } from "./Loader";
import { saveAs } from "file-saver";
export const CodeQrForm = () => {
  const [text, setText] = useState("");
  const [nameQr, setNameQr] = useState("");
  const [state, setState] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;

    setText(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setState(false);
    let url = `${image}`;
    if (text === "") {
      setText("https://");
      setState(false);
    } else {
      saveAs(url, `${nameQr}-qr-code`);
      setTimeout(() => {
        setState(true);
      }, 2000);
      setText("");
      setNameQr("");
    }
  };
  useEffect(() => {
    if (text === "") {
      setText("https://");
    }
  }, [text]);
  let image = `https://api.qrserver.com/v1/create-qr-code/?size=450x450&data=${text}`;

  return (
    <div className='space-y-4 text-center  w-full h-full '>
      <form
        onSubmit={handleClick}
        className='text-left space-y-6'>
        <div className=' md:flex  justify-center md:space-x-10 md:space-y-0 space-y-3 items-center'>
          <label
            htmlFor='name-qr'
            className='text-left  w-full md:w-1/2 text-lg font-heebo'>
            QR code name:
          </label>
          <input
            type='text'
            name='name-qr'
            placeholder='Name code-QR'
            className='md:w-4/5 w-full p-2 rounded-md outline-none text-black border-none font-heebo text-lg'
            onChange={(e) => setNameQr(e.target.value)}
            value={nameQr}
            required
          />
        </div>

        <textarea
          autoFocus
          className='w-full max-h-28 p-2 overflow-hidden   border-none outline-none rounded-md text-black'
          name='qr'
          onChange={handleChange}
          value={text}
          placeholder='Write or pege your url'></textarea>
      </form>
      <div className='flex items-center   '>
        <div className='bg-blue-400 md:w-full ] md:h-[40vh] w-full h-full  flex items-center justify-center  rounded-md '>
          {state ? (
            <img
              className='my-5 w-56   '
              src={`${image}`}
              alt='Code QR'
            />
          ) : (
            <Loader />
          )}
        </div>
      </div>

      <DownloadImage handleClick={handleClick} />
    </div>
  );
};
