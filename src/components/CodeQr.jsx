import { CodeQrForm } from "./CodeQrForm";

export const CodeQr = () => {
  return (
    <div className='text-slate-100 md:w-4/5 lg:w-1/2 w-full h-full flex p-5 justify-center border-2 border-blue-600 rounded-md'>
      <CodeQrForm />
    </div>
  );
};
