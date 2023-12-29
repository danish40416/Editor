import React, { useState } from 'react';
const Right = () => {
  const [currentView, setCurrentView] = useState('edit');

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };
  return (
    <div className="main-right">
      <div className='mx-4 py-3 mb-0'>
        <button className={`right-bar-btn  fw-bolder pe-5 ${currentView === 'edit' ? 'active' : ''}`}
          onClick={() => handleButtonClick('edit')}  > Edit </button>
        <button className={`right-bar-btn  fw-bolder ps-5 ${currentView === 'sheet' ? 'active' : ''}`}
          onClick={() => handleButtonClick('sheet')} >  Sheet </button>
      </div>

      <hr className='m-0' />
      {currentView === 'edit' && (
        <div>
          <div className='d-flex justify-content-center my-3'>
            <button type="button" className="right-btn"> Nest</button>
          </div>
          <div className='ps-3'>
            <div>
              <p>Ruler</p>
              <p>WireFrame</p>
              <p>Canvas Background</p>
              <p>Background Color</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;
