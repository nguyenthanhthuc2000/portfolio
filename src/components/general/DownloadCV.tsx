'use client';
import { 
  ArrowDownToLine,
} from 'lucide-react';

type DownloadCVProps = {
  className?: string;
  label: string;
};

const DownloadCV = ({ className = '', label }: DownloadCVProps) => {
  const handleDownloadCV = () => {
    alert('CV is updating!');
    return;
    window?.open('/files/Nguyen-Thanh-Thuc-Web-Developer.pdf', '_blank')
  }
  return (
    <>
      <button onClick={handleDownloadCV} className={`${className} box-border relative inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none`}>
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="relative flex items-center text-sm gap-3">
          <ArrowDownToLine size="18"/>
          <span>{label}</span>
        </span>
      </button>
    </>
  );
};

export default DownloadCV;
