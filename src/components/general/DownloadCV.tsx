'use client';
import { 
  ArrowDownToLine,
} from 'lucide-react';

const DownloadCV = () => {
  const handleDownloadCV = () => {
    alert('CV is being updated :)');
    return;
    window?.open('/files/Nguyen-Thanh-Thuc-Web-Developer.pdf', '_blank')
  }
  return (
    <button onClick={handleDownloadCV} className="flex items-center justify-center gap-1">
      Download CV
      <ArrowDownToLine size="18"/>
    </button>
  );
};

export default DownloadCV;
