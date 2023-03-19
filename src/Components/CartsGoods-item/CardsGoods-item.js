import { Link } from 'react-router-dom';
import './CardsGoods-item.css';


const CardsGoods = ({ id, src, name, country, price ,data}) => {

    return (
        <Link className='link-card' to={`/goods/${id}`} rel="noopener noreferrer">
            <div className="coffee-card " >
                <img className="coffee-card__img" src={"../Goods/" + src} alt="Coffee beans" />
                <div className="coffee-card__body">
                    <h5 className="coffee-card__title">{name}</h5>
                    <p className="coffee-card__country">{country}</p>
                    <p className="coffee-card__price">{price}$</p>
                </div>
            </div>
        </Link>
    );
};

export default CardsGoods;