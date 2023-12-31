import React, { useEffect, useState } from "react";

export default function CountDown() {
  const [days, setDays] = useState(formatTime(0));
  const [hours, setHours] = useState(formatTime(0));
  const [minutes, setMinutes] = useState(formatTime(0));
  const [seconds, setSeconds] = useState(formatTime(0));
  const [inputDate, setInputDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState();
  const [scale, setScale] = useState("scale-0");
  const updateCurrentDate = () => {
    setCurrentDate(new Date());
  };
  function timer() {
    if (!inputDate) {
      setTimeout(() => {
        setScale("scale-0");
        setMessage();
      }, 1500);
      setMessage("Please Select a Date");
      setScale("scale-100");
      return;
    }
    const changingDate = new Date(inputDate);
    changingDate.setHours(0, 0, 0, 0);
    if (changingDate <= currentDate) {
      setTimeout(() => {
        setScale("scale-0");
        setMessage();
      }, 1500);
      setMessage("Please select Future Dates");
      setScale("scale-100");
      setDays(formatTime(0));
      setHours(formatTime(0));
      setMinutes(formatTime(0));
      setSeconds(formatTime(0));
      setCount(0);
      return;
    }
    updateCurrentDate();
    const totalSeconds = (changingDate - currentDate) / 1000;
    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(formatTime(Math.floor(totalSeconds / 3600) % 24));
    setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60));
    setSeconds(formatTime(Math.floor(totalSeconds % 60)));
    setCount(1);
  }
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const minDate = `${year}-${formatTime(month)}-${formatTime(day)}`;

  useEffect(() => {
    if (count !== 0) {
      updateCurrentDate();
      timer();
    }
  }, [count, currentDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  function handleSubmit() {
    timer();
  }

  return (
    <div className="bg-slate-950 text-white w-screen flex flex-col justify-center items-center gap-14">
      <div className="flex justify-center sm:flex-row flex-col items-center  text-2xl gap-4">
        <div className="flex flex-col items-center justify-center ">
          <span className="bg-gray-500 h-10 w-10 justify-center items-center flex text-2xl rounded-md text-gray-950 font-bold">
            {days}
          </span>
          <span>Days</span>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <span className="bg-gray-500 h-10 w-10 justify-center items-center flex text-2xl rounded-md text-gray-950 font-bold">
            {hours}
          </span>
          <span>Hours</span>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <span className="bg-gray-500 h-10 w-10 justify-center items-center flex text-2xl rounded-md text-gray-950 font-bold">
            {minutes}
          </span>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <span className="bg-gray-500 h-10 w-10 justify-center items-center flex text-2xl rounded-md text-gray-950 font-bold">
            {seconds}
          </span>
          <span>Seconds</span>
        </div>
      </div>
      <div className="relative flex justify-center sm:flex-row flex-col items-center gap-3">
        <div
          className={`fixed text-2xl sm:text-3xl ${scale} h-screen top-0 bottom-0 left-0 right-0 w-screen flex justify-center items-center uppercase bg-slate-950 transition-all duration-200 px-3 text-center font-bold`}
        >
          {message}
        </div>
        <input
          type="date"
          placeholder="Enter Date"
          min={minDate}
          value={inputDate}
          onChange={(e) => {
            setInputDate(e.target.value);
          }}
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
        />
        <button
          className="bg-gray-600 text-white px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-200"
          onClick={handleSubmit}
        >
          Start CountDown
        </button>
      </div>
    </div>
  );
}
