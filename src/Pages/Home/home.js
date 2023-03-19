import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import NavMain from '../../Components/NavMain/NavMain';
import CoffeBeansLabel from '../../Components/coffeeBeans/coffeeBeans'
import CardList from '../../Components/CartsGoods-list/CartsGoods-list';
import Footer from '../../Components/footer/footer';





const Home = ({data}) => {
    
    const proposedItems = data.filter(item => item.reccomendate === true);

    return (
        <Fragment>
            <div className="main">
                <div className="container text-center">
                    <div className="row">
                        <div className="col main-text">
                            <NavMain color='white'/>
                            <h1 className='main-title'>Everything You Love About Coffee</h1>
                            <CoffeBeansLabel color='white'/>
                            <h2 className='main-subtitle'>We makes every day full of energy and taste</h2>
                            <h2 className='main-subtitle'>Want to try our beans?</h2>
                           <Link to="/about"> <button className="btn btn-outline-light btn-main">More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
            <div className="container text-center" >
                    <div className="row align-items-center justify-content-center">
                        <div className='col-12 col-sm-12 col-md-12 col-lg-8'>
                            <h2 className="about-title">About Us</h2>
                            <CoffeBeansLabel color='black'/>
                            <p className="about-text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                            <p className="about-text-down">
                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                            </p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="recommended">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="recommended-title">Our best</h2>
                            {/* <CardList data={proposedItems} /> */}
                            <CardList data={proposedItems}/>
                        </div>
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
        </Fragment>
    );
}

export default Home;