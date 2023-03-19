import CardsGoods from "../CartsGoods-item/CardsGoods-item";
import './CartsGoods.css'


const CardList = ({data}) => {

    const elements = data.map(item => {
        return (
            <CardsGoods {...item}/>
        )
    })

    return (
        <div className="d-flex flex-wrap justify-content-center wrapper">
            {elements}
        </div>
    )
};

export default CardList;