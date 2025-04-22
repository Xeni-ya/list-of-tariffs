import PropTypes from 'prop-types';
import './tariffCard.css';

const TariffCard = (props, colorHeader, colorPrice) => {
  const card__item = props.price === "550" ? "card__item active" : "card__item";

  return (
    <div className={card__item}>
      <div className="card__item-header" style={{ backgroundColor: colorHeader }}>
        Безлимитный {props.price}
      </div>
      <div className="card__item-price" style={{ backgroundColor: colorPrice }}>
        <span className="card__price-currency">руб</span>
        <span className="card__price">{props.price}</span>
        <span className="card__price-period">/мес</span>
      </div>
      <div className="card__item-speed">
        до <span>{props.speed}</span> Мбит/сек
      </div>
      <div className="card__item-footer">
        {props.description}
      </div>
    </div>
  );
}

TariffCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  speed: PropTypes.string,
  description: PropTypes.string,
};

export default TariffCard;