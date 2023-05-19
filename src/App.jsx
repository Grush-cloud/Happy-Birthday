import { useState } from "react";
import "./App.css";
import { saveAs } from "file-saver";

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const InputClick = (e) => {
    setIsClicked((prevState) => !prevState);
  };
  const handleClick = () => {
    let url = "http://localhost:5173/coupon.jpg";
    saveAs(url, "coupon.jpg");
  };
  return (
    <div className={isClicked ? " birthday-gift shaking" : "birthday-gift"}>
      <div className="gift">
        <input id="click" type="checkbox" onClick={InputClick} />
        <label className="click" htmlFor="click"></label>

        <div className="card">
          <div className="card-header">
            <h2>Happy Birthday!</h2>
          </div>
          <div className="card-body">
            <p className="message">
              Heyyyy! Happy birthday to you! I hope this day brings you
              countless reasons to smile, be happy, and create unforgettable
              moments. I remember you warning me not to get you a gift, so I
              thought we could do something different and special. Instead of a
              traditional gift, I've prepared some coupons for you. I know how
              much you love your novels, so when you're ready to accept my gift,
              just show me these coupons. Once again, happy birthday to you! I'm
              going to do my best to make this one of your best birthdays yet.
            </p>
          </div>
          <div>
            <button onClick={handleClick}>Download Coupon</button>
          </div>
        </div>

        <div className="sparkles">
          <div className="spark1"></div>
          <div className="spark2"></div>
          <div className="spark3"></div>
          <div className="spark4"></div>
          <div className="spark5"></div>
          <div className="spark6"></div>
        </div>
        <div className="sparkles-mid">
          <div className="spark1"></div>
          <div className="spark2"></div>
          <div className="spark3"></div>
          <div className="spark4"></div>
          <div className="spark5"></div>
          <div className="spark6"></div>
        </div>
        <div className="sparkles-right">
          <div className="spark1"></div>
          <div className="spark2"></div>
          <div className="spark3"></div>
          <div className="spark4"></div>
          <div className="spark5"></div>
          <div className="spark6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
