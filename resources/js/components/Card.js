function Card({ id, imgUrl, altImage, title, desc, isSelected, onClick }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={imgUrl} alt={altImage} />
      </div>
      <div className="card__desc">
        <h4>{title}</h4>
        <p className="card__desc__subtitle">{desc}</p>
        <p className="card__desc__link">
          <button onClick={() => onClick(id)}>
            <p>{isSelected}</p>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Card;
