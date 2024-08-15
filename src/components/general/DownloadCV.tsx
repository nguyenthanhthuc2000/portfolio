'use client';
import { 
  ArrowDownToLine,
} from 'lucide-react';

const DownloadCV = () => {
  const handleDownloadCV = () => {
    alert('CV is updating :)');
    return;
    window?.open('/files/Nguyen-Thanh-Thuc-Web-Developer.pdf', '_blank')
  }
  return (
    <>
      <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-bold py-2 px-4 rounded-3xl inline-flex items-center gap-2" onClick={handleDownloadCV}>
        <ArrowDownToLine size="18"/>
        <span>Download CV</span>
      </button>
    </>
  );
};

export default DownloadCV;
