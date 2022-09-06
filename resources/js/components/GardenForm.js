import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

function GardenForm({ optionLahan, optionTemaTaman, optionEstimasi }) {
  const [active, setActive] = useState("");
  const [activeEstimasi, setActiveEstimasi] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <div className="garden-form big-form">
      <h2>Informasi Konsultasi Taman</h2>
      <div className="lahan">
        <div className="lahan__desc">
          <h3 className="titleDesc">Lahan Taman</h3>
          <p className="subtitle">Pilih jumlah lahan taman yang akan dibuat</p>
        </div>
        <div className="flex lahan__option">
          {optionLahan.map((item) => (
            <Button
              {...item}
              key={item.id}
              className={`lahan__button ${
                active === item.id ? "button--active" : ""
              }`}
              value={item.lahanTitle}
              onClick={setActive}
            />
          ))}
        </div>
      </div>
      <div className="tema-taman">
        <div className="tema-taman__desc">
          <h3 className="titleDesc">Tema Taman</h3>
          <p className="subtitle">Pilih tema taman yang akan dibuat</p>
        </div>
        <div className="catatan">
          <p>
            <strong>Catatan: </strong>Jika belum memiliki inspirasi tema taman
            maka anda bisa melewati tahap ini,
            <br />
            konsultan kami akan memberikan rekomendasi terbaik untuk taman anda
          </p>
        </div>
        <div className="tema-taman__option">
          {optionTemaTaman.map((item) => (
            <Card
              key={item.id}
              imgUrl={item.img}
              altImage={`Image of ${item.title}`}
              isSelected={selected === item.id ? "Dipilih" : "Pilih"}
              onClick={setSelected}
              {...item}
            />
          ))}
        </div>
      </div>
      <div className="estimasi-ukuran">
        <h3 className="titleDesc">Estimasi Ukuran Taman</h3>
        <div className="flex estimasi-ukuran__option">
          {optionEstimasi.map((item) => (
            <Button
              {...item}
              key={item.id}
              value={item.title}
              className={`estimasi-ukuran__button ${
                activeEstimasi === item.id ? "button--active" : ""
              }`}
              onClick={setActiveEstimasi}
            />
          ))}
        </div>
      </div>
      <div className="button-submit">
        <form>
          <button className="button button--cancel">Batal</button>
          <button className="button button--success">OKE</button>
        </form>
      </div>
    </div>
  );
}

export default GardenForm;
