import { Component } from 'react';
import './cardlistfilter.css'


class CardListFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 search'>
                        <div className="d-flex justify-content-center align-items-center search-group">
                            <label className='search-label' htmlFor='search-input'>Lookiing for</label>
                            <input
                                className='form-control search-input'
                                type="text"
                                placeholder='start typing here...'
                                id='search-input' 
                                value={this.state.term}
                                onChange={this.onUpdateSearch}
                                />
          
                        </div>
                    </div> 
        )
}
}

export default CardListFilters;


