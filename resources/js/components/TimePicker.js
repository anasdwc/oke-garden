import { useState } from "react";
import Button from "./Button";

function TimePicker({ day, date, dataTime }) {
  const [active, setActive] = useState("");

  return (
    <div className="time-picker form">
      <div className="time-picker__mainDesc">
        <h2 className="time-picker__day">{day}</h2>
        <p className="time-picker__date">{date}</p>
      </div>
      <div className="time-picker__time">
        <div className="time-picker__desc">
          <h3>Pilih Waktu</h3>
          <p>Durasi konsultasi 30 menit</p>
        </div>
        <div className="time-picker__time-list grid grid--two grid--gap-1">
          {dataTime.map((item) => (
            <Button
              {...item}
              className={`time-picker__time-button ${
                active === item.id ? "time-picker--active" : ""
              }`}
              key={item.id}
              value={item.timeValue}
              onClick={setActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimePicker;
