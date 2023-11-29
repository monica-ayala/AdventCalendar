import { useState } from 'react';
export interface CurtainProps {
    children: JSX.Element
}

const Curtain = ({children}:CurtainProps) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="curtain">
      <div className="curtain__wrapper">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />

        <div className="curtain__panel curtain__panel--left"></div>

        <div className="prize">{children}</div>

        <div className="curtain__panel curtain__panel--right"></div>
      </div>
    </div>
  );
};

export default Curtain;