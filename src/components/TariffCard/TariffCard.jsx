import PropTypes from 'prop-types';
import './tariffCard.css';

const TariffCard = (props) => {
  const card__item = props.price === "550" ? "card__item active" : "card__item";

  return (
    <div className={card__item}>
      <div className="card__item-header">
        Безлимитный {props.price}
      </div>
      <div className="card__item-price">
        руб
        <span className="card__price">{props.price}</span>
        /мес
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