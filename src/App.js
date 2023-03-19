import {Component,StrictMode} from 'react';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Coffee from './Pages/Coffee/coffee';
import Goods from './Pages/Goods/goods';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {id: 1 ,src: "Good-1.svg" ,name: 'Solimo Coffee Beans 2 kg' ,reccomendate: false ,country: 'Brazil' ,price: 500},
        {id: 2 ,src: 'Good-2.svg' ,name: 'Presto Coffee Beans 1 kg' ,reccomendate: true ,country: 'Columbia' ,price: 500},
        {id: 3 ,src: 'Good-3.svg' ,name: 'AROMISTICO Coffee 1 kg' ,reccomendate:  true ,country: 'Kenya' ,price: 1500},
        {id: 4 ,src: 'Good-3.svg' ,name: 'AROMISTICO Coffee 1 kg' ,reccomendate: false ,country: 'Brazil' ,price: 800},
        {id: 5 ,src: 'Good-3.svg' ,name: 'AROMISTICO Coffee 1 kg' ,reccomendate: true ,country: 'Kenya' ,price: 110},
        {id: 6 ,src: 'Good-3.svg' ,name: 'AROMISTICO Coffee 1 kg' ,reccomendate: false ,country: 'Columbia' ,price: 50}
      ],
      term: '',
      filter: ''
    }
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
        return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterCountry = (items, filter) => {
    switch (filter) {
      case 'Brazil':
        return items.filter(item => item.country=='Brazil');
      case 'Kenya':
        return items.filter(item => item.country=='Kenya');
      case 'Columbia':
        return items.filter(item => item.country=='Columbia');
      default: 
        return items
    }
  }

  onFilterSelect = (filter) => {
    if (this.state.filter === filter) {
      this.setState({filter : ''})
    } else {
      this.setState({filter});
    }
    
  }

  render () {
      const {data, term ,filter} = this.state;
      const visibleData = this.filterCountry(this.searchEmp(data, term), filter);


    return (
      <div>
      
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/coffee" element={<Coffee data={visibleData} onUpdateSearch={this.onUpdateSearch} filter={filter} onFilterSelect={this.onFilterSelect}/>} />
        <Route path="/about" element={<About data={data} />} /> 
        <Route path="/goods/:id" element={<Goods data={data}/>} />
      </Routes>

    </div>
    )
  }
}

export default App;