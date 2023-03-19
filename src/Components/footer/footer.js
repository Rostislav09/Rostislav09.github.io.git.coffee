import NavMain from "../NavMain/NavMain";
import CoffeeBeansLabel from "../coffeeBeans/coffeeBeans";
import './footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <NavMain color='black'  increase='center'/>
            <CoffeeBeansLabel color='black'/>
        </div>

    );
};

export default Footer;