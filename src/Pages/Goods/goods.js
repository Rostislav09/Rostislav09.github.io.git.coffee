import NavMain from "../../Components/NavMain/NavMain";
import { Link } from "react-router-dom";
import CoffeeBeansLabel from "../../Components/coffeeBeans/coffeeBeans";
import imgGeneral from '../../images/Goods/General.jpg'
import Footer from "../../Components/footer/footer";
import './goods.css'
import { useParams } from "react-router-dom";





const Goods = ({data}) => {

const { id } = useParams();
const product = data.find(item => item.id === parseInt(id));

    return (
        <>
            <div className='coffee-page__inner'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <NavMain color='white'/>
                            <h1 className='coffee-page__title'>Our Coffee</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='goods'>
                <div className="container" >
                        <Link to={'/coffee'} className="btn btn-outline-light btn-back"><span>&#10094;</span> Back</Link> 
                    <div className="row align-items-center justify-content-center">

                        <div className="col-10 col-sm-8 col-md-6 col-lg-5">
                            <span className="about-image">
                                <img src={imgGeneral} alt='coffee beans' /> 
                            </span>
                        </div>
                        
                        <div className='col-10 col-sm-8 col-md-6 col-lg-5 text'>
                            <h2 className="about-title  text-center">About it</h2>
                            <CoffeeBeansLabel color="black" />
                            <div className="text-left">
                                <p className="about-country"><b>Country: </b>{product.country}</p> 
                                <p className="about-text text-description"><b>Description:</b>Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.

                                Seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles that are typically steeped in hot water before being filtered out, producing a cup of coffee. It is usually served hot, although chilled or iced coffee is common. Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often used to mask the bitter taste or enhance the flavor. </p>
                                <p className="about-price"><b>Price: </b><span>{product.price}$</span></p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div >
            <div className='footer'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                         <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Goods;