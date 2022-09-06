function InputForm({ id, value, defaultInput, onChange }) {
  return (
    <div className="personal-data__input">
      <label htmlFor={id} className="label">
        {value}
      </label>
      <br></br>
      <input
        id={id}
        type="text"
        value={defaultInput}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default InputForm;
