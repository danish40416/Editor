import React, { useState } from 'react';

const Right = () => {
  const [currentView, setCurrentView] = useState('edit');

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="main-right ">
      <div className='py-3 right-top-btn'>
        <button className={`right-bar-btn fw-bolder   ${currentView === 'edit' ? 'active' : ''}`}
          onClick={() => handleButtonClick('edit')}> Edit</button>
        <button className={`right-bar-btn  fw-bolder  ${currentView === 'sheet' ? 'active' : ''}`}
          onClick={() => handleButtonClick('sheet')} >  Sheet </button>
      </div>

      <hr className='m-0' />

      {currentView === 'edit' && (
        <div>
          <div className='d-flex justify-content-center my-3'>
            <button type="button" className="right-btn"> Next</button>
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
       {currentView === 'sheet' && (
        <div>
          <div className='d-flex justify-content-center my-3'>
            <button type="button" className="right-btn"> Back</button>
          </div>
          <div className='ps-3'>
            <div>
              <p>Canvas Background</p>
              <p>Background Color</p>
              <p>Ruler</p>
              <p>WireFrame</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;
