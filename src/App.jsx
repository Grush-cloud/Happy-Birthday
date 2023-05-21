import { useState, useEffect } from "react";
import "./App.css";
import { saveAs } from "file-saver";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const InputClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  const handleClick = () => {
    let url = "https://grush-cloud.github.io/Happy-Birthday/coupon.jpg";
    saveAs(url, "coupon.jpg");
  };
  useEffect(() => {
    const audio = new Audio();
    audio.src = isClicked ? "fireworks.mp3" : "shake.mp3";
    audio.loop = true;
    audio.play();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isClicked]);
  return (
    <div className={!isClicked ? " birthday-gift shaking" : "birthday-gift"}>
      <div className="gift">
        <input id="click" type="checkbox" onClick={InputClick} />
        <label className="click" htmlFor="click"></label>

        <div className="card">
          <div className="card-header">
            <h2>Happy Birthday!</h2>
          </div>
          <div className="card-body">
            <p className="message">
              Happy birthday, Oghome! Wishing you a day filled with joy,
              laughter, and beautiful moments. May this special day be a
              celebration of all the wonderful qualities that make you so
              amazing. I pray that God keeps you strong and healthy, and blesses
              you with many more birthdays to come. I know you mentioned not
              wanting me to gift you anything, but honestly I'm a little
              stubborn so i gotta show my appreciation for you. Knowing how much
              you love reading novels, I couldn't resist creating these coupons
              as a token of my affection. When you're ready to accept my
              birthday gift, simply show me the coupons. It's my small way of
              cherishing our connection and bringing a smile to your face. Once
              again, happy birthday. May this day be filled with happiness,
              happiness and joy. I'm looking forward to celebrating with you and
              creating lasting memories. Can't wait to see you later today! 💖
            </p>
          </div>
          <div>
            <button onClick={handleClick}>Tap here for Coupon</button>
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
