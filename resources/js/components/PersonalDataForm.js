import InputForm from "./InputForm";

function PersonalDataForm({ phoneChange, phoneValue, nameValue, nameChange }) {
  return (
    <div className="personal-data big-form">
      <h2 className="personal-data__title">Informasi Data Diri</h2>
      <form className="personal-data__form">
        <div className="personal-data__form__bio">
          <InputForm
            id="name"
            value="Nama Lengkap"
            defaultInput={nameValue}
            onChange={nameChange}
          />
          <InputForm
            id="phone"
            value="No HP"
            defaultInput={phoneValue}
            onChange={phoneChange}
          />
        </div>
        <div className="personal-data__form__address">
          <p className="label personal-data__form__address__label">Alamat</p>
          <div className="personal-data__form__address__box">
            <p className="personal-data__form__address__input">
              Jl. Serangkai 1 Perum. Bumi Jaya Blok A No 12 Kelurahan Samping,
              Kecamatan Baru,
              <br />
              Kota Tanjungpinang, Kepulauan Riau 29125, Indonesia
            </p>
            <p className="personal-data__form__address__addNew">
              <a href="./">Tambah Alamat Baru</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDataForm;
