import './style.css';
import Image from 'next/image';
import placeholderImag from '../../../public/logo.jpg';

function UserWelcome() {
  return (
    <div className="UserWelcomMain">
      <h2 className="UserName">Hello John Wick</h2>
      <p className="To see the complete report "></p>
      <p></p>
    </div>
  );
};

export { UserWelcome };
