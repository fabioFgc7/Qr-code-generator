import "./index.css";
import { CodeQr } from "./components/CodeQr";

function App() {
  return (
    <div className='font-heebo p-5  md:p-10 w-full flex flex-col justify-center items-center bg-[#0d1a2d] md:h-screen'>
      <h1 className='text-2xl  uppercase mb-2 text-slate-200'>
        QR Code Generator
      </h1>
      <CodeQr />
    </div>
  );
}

export default App;
