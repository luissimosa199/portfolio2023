import { useState } from "react";

function Carrousel({ imgData }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevPic = () => {
    if (currentIdx === imgData.length - 1) {
      setCurrentIdx(0);
      return;
    }
    setCurrentIdx(currentIdx + 1);
  };

  const nextPic = () => {
    if (currentIdx === 0) {
      setCurrentIdx(imgData.length - 1);
      return;
    }
    setCurrentIdx(currentIdx - 1);
  };

  return (
    <div className="projects-carousel">
      <img src={imgData[currentIdx]} alt="" />
      <button className="projects-nextbtn" onClick={nextPic}>
        <img src="https://img.icons8.com/ios-filled/50/null/less-than.png" alt="less than icon" />
      </button>
      <button className="projects-prevbtn" onClick={prevPic}>
        <img src="https://img.icons8.com/ios-filled/50/null/more-than.png" alt="greater than icon" />
      </button>
    </div>
  );
}

export default Carrousel;
