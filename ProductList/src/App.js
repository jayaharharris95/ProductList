import React from 'react';

const data = [
  { id: 1, name: "Lenovo" ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmT6D1NOJMUbkrmtcTqGW_OrgBBLK5Yvomg&usqp=CAU-images-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg',price:'13000',category: 'Laptop'},
  { id: 2, name: "Polo" ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhUuYmKnzbae3eL9iV39xDri_weYMhssmjg&usqp=CAUges-amazon.com/images/I/71pYXdg9%2BIL._SL1500_.jpg',price:'1000',category:'T-shirt'},
  { id: 3, name: "Levi" ,image:'https://cdn.shopify.com/s/files/1/1231/6442/products/M-TSHIRT-15906-19597-RED_2_394x.jpg?v=1607750789',price:'90',category:'T-shirt',variants:[{size:'L'}]},

];

 class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = { items: [], filterBrand: '',filterCategory:'' ,minprice:'100',maxprice:'50000' };
  }

	render() {
		return (
<div>
   <div className='filer-wrapper'> 

     <input 
        			onChange={this.onRangeMinInputChange} 
        			type="range" 
        			value={this.state.minprice} 
        			min="100" max="1000" 
        			step="2" 
        		/>   
       <h3>Min price Range:{this.state.minprice}</h3>       
       <input 
        			onChange={this.onRangeMaxInputChange} 
        			type="range" 
        			value={this.state.maxprice} 
        			min="1000" max="50000" 
        			step="2" 
        		/>   
       <h3>Maxprice Range:{this.state.maxprice}</h3>        
   </div>
   
      <div className='product-list-wrapper'>
       
      {data.map((item) => {
        console.log(this.state.minprice)
        console.log(item.price)
         if(this.state.minprice < Number(item.price)) {
           console.log("inside")
          return(
      <div key={item.id} className="product-card">
        <div className='image-wrapper'>
        <img className='image-src' src={item.image} alt={item.name}></img>  
        </div>
        <div className='desc-wrapper'>
      <h1>{item.name}</h1>
      <p>Price:{item.price}</p>
      </div>
    </div>
          )
         }
      })}
          </div>
          </div>
  )

	}

  onRangeMinInputChange = (e) => {
    this.setState(state => ({
        minprice: e.target.value,
    }));
}
onRangeMaxInputChange = (e) => {
    this.setState(state => ({
        maxprice: e.target.value,
    }));
}
}

export default App;
