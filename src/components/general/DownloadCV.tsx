'use client';

const DownloadCV = () => {
  const handleDownloadCV = () => {
    alert('CV is being updated :)');
    return;
    window?.open('/files/Nguyen-Thanh-Thuc-Web-Developer.pdf', '_blank')
  }
  return (
    <button onClick={handleDownloadCV}>
      Download CV
    </button>
  );
};

export default DownloadCV;
