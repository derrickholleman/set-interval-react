import { useState, useEffect } from "react";

function DateDisplay() {
  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);
  return <div>{dt}</div>;
}

export default DateDisplay;
