import PropTypes from 'prop-types';
import './card.css';

const Card = (props) => {
  return (
    <div className="card__item">
      <div className="card__item-header">
        {props.title} {props.price}
      </div>
      <div className="card__item-price">
        руб
        <span className="card__price">{props.price}</span>
        /мес
      </div>
      <div className='card__item-speed'>
        до <span>{props.speed}</span> Мбит/сек
      </div>
      <div className='card__item-footer'>
        {props.description}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  speed: PropTypes.string,
  description: PropTypes.string,
};

export default Card;