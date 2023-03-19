import './coffeeBeans.css'
import BeansLogoWhite from '../../images/CofeeBeans/Beans-logo-white.svg'
import BeansLogoBlack from '../../images/CofeeBeans/Beans-logo-black.svg'

const CoffeeBeansLabel = ({color}) => {
const ColorLabel = (color === 'white') ? BeansLogoWhite : BeansLogoBlack ;

    return (
        <div className="CoffeeBeansLabel">
            <img className='logo' src={ColorLabel} alt={"logo"}/>
        </div>
    )
};

export default CoffeeBeansLabel;

