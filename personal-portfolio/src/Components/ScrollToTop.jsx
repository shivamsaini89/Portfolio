import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import '../Styles/ScrollToTop.css';

const ScrollToTop = () => {
    const handleClick = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <div className="top-to-btm">
      {/* <svg onClick={handleClick} className="icon-position icon-style" xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="26" height="26"><path d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM12,2A10,10,0,1,1,2,12,10.011,10.011,0,0,1,12,2Z"/><path d="M12,8a2.993,2.993,0,0,1,1.987.752c.327.291.637.574.84.777L17.7,12.353a1,1,0,1,1-1.4,1.426L13.42,10.95c-.188-.187-.468-.441-.759-.7a1,1,0,0,0-1.323,0c-.29.258-.57.512-.752.693L7.7,13.779a1,1,0,0,1-1.4-1.426L9.178,9.524c.2-.2.507-.48.833-.769A2.99,2.99,0,0,1,12,8Z"/></svg> */}
      <FaAngleUp onClick={handleClick} className="icon-position icon-style" />

    </div>
  );
};

export default ScrollToTop;
