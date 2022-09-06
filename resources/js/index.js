import Calendar from "react-calendar";
import React, { useState } from "react";
import TimePicker from "./components/TimePicker";
import PersonalDataForm from "./components/PersonalDataForm";
import GardenForm from "./components/GardenForm";
import DryGarden from "./images/dry.jpg";
import MinimalistGarden from "./images/minimalis.jpg";
import TropicGarden from "./images/tropic.jpg";
import logo from "./images/logo.png";
import user from "./images/user.jpg";
import Header from "./components/Header";

function App() {
  const [date, onChangeDate] = useState(new Date());
  const [name, setName] = useState("Yudha Wahyu");
  const [phone, setPhone] = useState("+62 852 2324 4747");

  const timeData = [
    {
      id: 1,
      timeValue: "09.00",
    },
    {
      id: 2,
      timeValue: "10.00",
    },
    {
      id: 3,
      timeValue: "11.00",
    },
    {
      id: 4,
      timeValue: "12.00",
    },
    {
      id: 5,
      timeValue: "13.00",
    },
    {
      id: 6,
      timeValue: "14.00",
    },
    {
      id: 7,
      timeValue: "15.00",
    },
    {
      id: 8,
      timeValue: "16.00",
    },
  ];

  const lahanData = [
    {
      id: 10,
      lahanTitle: "1 Lahan Taman",
    },
    {
      id: 11,
      lahanTitle: "2 Lahan Taman",
    },
    {
      id: 12,
      lahanTitle: "Lebih dari 2 Lahan Taman",
    },
  ];

  const temaTaman = [
    {
      id: 20,
      title: "Taman Minimalis",
      desc: "Taman yang indah dilahan yang sempit",
      img: `${MinimalistGarden}`,
    },
    {
      id: 21,
      title: "Taman Kering",
      desc: "Taman yang dirancang untuk menghasilkan suasana alam didalam dan diluar rumah",
      img: `${DryGarden}`,
    },
    {
      id: 22,
      title: "Taman Tropis",
      desc: "Taman yang paling sesuai dengan iklim di Indonesia",
      img: `${TropicGarden}`,
    },
  ];

  const estimasiUkuran = [
    {
      id: 40,
      title: "<10m2",
    },
    {
      id: 41,
      title: "11-20m2",
    },
    {
      id: 42,
      title: "21-30m2",
    },
    {
      id: 43,
      title: "31-40m2",
    },
    {
      id: 44,
      title: "41-50m2",
    },
    {
      id: 45,
      title: "51-60m2",
    },
    {
      id: 46,
      title: ">100m2",
    },
  ];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
  ];

  const getDate = () => {
    const month = date.getMonth();
    const dateStr = date.getDate();
    const year = date.getFullYear();

    return `${monthName[month]} ${dateStr}, ${year}`;
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  return (
    <div>
      <Header logo={logo} user={user} />
      <div className="main">
        <div className="desc">
          <h1>Konsultasi Taman</h1>
          <p>
            klik dibawah ini untuk memilih tanggal & waktu yang tersedia untuk
            memanggil konsultan kami
          </p>
        </div>

        <div className="flex">
          <Calendar
            className={"form"}
            value={date}
            onChange={onChangeDate}
            next2Label={null}
            prev2Label={null}
          />
          <TimePicker
            day={weekday[date.getDay()]}
            date={getDate()}
            dataTime={timeData}
          />
        </div>

        <div className="form mt--2">
          <PersonalDataForm
            nameValue={name}
            nameChange={handleNameChange}
            phoneValue={phone}
            phoneChange={handlePhoneChange}
          />
          <GardenForm
            optionLahan={lahanData}
            optionTemaTaman={temaTaman}
            optionEstimasi={estimasiUkuran}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
