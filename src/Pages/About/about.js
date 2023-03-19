import NavMain from "../../Components/NavMain/NavMain";
import CoffeeBeansLabel from "../../Components/coffeeBeans/coffeeBeans";
import img from '../../images/For-your-pleasure/card.png'
import CardList from '../../Components/CartsGoods-list/CartsGoods-list';
import Footer from "../../Components/footer/footer";
import './about.css'



const About = ({data}) => {

    return (
        <>
        <div className='coffee-page__inner coffee-page'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <NavMain color='white'/>
                        <h1 className='coffee-page__title'>For your pleasure</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="container text-center" >
                            <div className="row align-items-center">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <span className="about-image">
                                        <img style={{ 'width': '272px', 'height': '355px' }} src={img} alt='coffee beans' effect="blur" />
                                    </span>
                                </div>
                                <div className='col col-10 col-sm-8 col-md-6 col-lg-6 about-content'>
                                    <h2 className="about-title">About our goods</h2>
                                    <CoffeeBeansLabel color="black" />
                                    <p className="about-text">
                                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    </p>
                                    <p className="about-text">
                                        Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                                    </p>
                                    
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-3 text-center">
                    <hr className="line-black "></hr>
                </div>
            </div>
        </div>

        
    
        <div className="container text-center">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-6 col-lg-10"> 
                    <CardList data={data}/>
                </div>
            </div>
        </div>

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
       );
}

export default About;