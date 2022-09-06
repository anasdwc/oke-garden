function Button({ id, value, onClick, className }) {
  return (
    <div key={id} className={className} onClick={() => onClick(id)}>
      <button className="button">{value}</button>
    </div>
  );
}

export default Button;
