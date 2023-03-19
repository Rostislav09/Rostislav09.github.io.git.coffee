
import '../FilterCountry/filtercountry.css'


const FilterCounrty = (props) => {

const buttonsData = [
    { name: 'Brazil', label: 'Brazil' },
    { name: 'Kenya', label: 'Kenya' },
    { name: 'Columbia', label: 'Columbia' }
];
const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'active' : "";
    return (
        <button
            type="button"
            className={`btn btn-light filter-btn ${clazz}`}
            key={name}
            onClick= {() => props.onFilterSelect(name)}
            >
            {label}        
        </button>
    )    

})

return (
    <div className='col-12 col-sm-12 col-md-7 col-lg-6 filter-group'>
        <label className='filter-label' htmlFor='filter-button'>Or filter</label>
        {buttons}
    </div>
    )
}

export default FilterCounrty;


