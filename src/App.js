import React from 'react'; 
import Cart from './Cart';
import NavBar from './NavBar';
class App extends React.Component {
  constructor() {
    // Everytime we are adding Contructor to our classes in react, we
    // we need to add super() (Calling parent class)
    super();
    this.state = {
      Items: [
        { 
            id: 1, 
            price: 599, 
            title: "Apple Ipad 8th gen - 64GB", 
            qty: 1, 
            img: "https://cdn11.bigcommerce.com/s-ss31ap/images/stencil/1280x1280/products/7731/27469/6340423cv11d__14501.1600398166.jpg?c=2" 
        },
        { 
            id: 2, 
            price: 349, 
            title: "Apple Watch 3 - 42mm", 
            qty: 2, 
            img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-space-sport-black-nc-1up?wid=940&hei=1112&fmt=png-alpha&.v=1594318651000" 
        },
        { 
            id: 3, 
            price: 999,
            title: "Iphone 12 - 128GB", 
            qty: 4, 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOpx7Q2YVNixGamtk5EB2hHOCjzIurDZG2z1stBz_ueMGnZwTP81bqh0vHTwjKJEEOpMyuqM&usqp=CAc" 
        },
        {
          id: 4,
          price: 49,
          title: "Iphone Charger",
          qty: 1,
          img: "https://images-na.ssl-images-amazon.com/images/I/51YKDkldfwL._SY355_.jpg",
        },
        {
          id: 5,
          price: 1299,
          title: "Apple Macbook Air - 512GB",
          qty: 2,
          img: "data:image/jpeg;base64,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",
        },
        { 
            id: 6, 
            price: 179, 
            title: "Apple Airpods Pro", 
            qty: 4, 
            img: "data:image/jpeg;base64,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" 
        },
        { 
            id: 7, 
            price: 89, 
            title: "Apple Pencil - 2", 
            qty: 1, 
            img: "https://www.macworld.com/wp-content/uploads/2021/03/fojojo-active-stylus-ipad-100825933-orig-1.jpg?quality=50&strip=all&w=1024" 
        },
        {
          id: 8,
          price: 0.99,
          title: "Apple Itunes Membership - Monthly",
          qty: 5,
          img: "https://cdn-products.eneba.com/resized-products/2pQP6ZDaNBm8S2HWLp29J49wvX1mSFaRtSrLIhkhhk4_350x200_1x-0.jpeg",
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    //   console.log("Please Increase the Quantity of ", product);
    const { Items } = this.state;
    const index = Items.indexOf(product);
    Items[index].qty += 1;
    this.setState({
        Items
    })
  }
  handleDecreaseQuantity = (product) => {
    //   console.log("Please Increase the Quantity of ", product);
    const { Items } = this.state;
    const index = Items.indexOf(product);
    //We are grabbing the Items from the state and finding the index of the clicked
    //Product and perform the action and setState accordingly.
    console.log(Items[index].qty)
    if(Items[index].qty > 1){
        Items[index].qty -= 1;
        this.setState({
            Items
        })
    }else{
        Items[index].qty = 0;
        this.handleDeleteQuantity(Items[index].id);
    }
  }
  handleDeleteQuantity = (id) => {
      const { Items } = this.state;
      const products = Items.filter((item)=>item.id!=id); // Return array of item after deleting that product
      this.setState({
          Items : products
      })
  }
  getCountItems = () => {
    const { Items } = this.state;
    let count = 0;
    Items.forEach((item) => {
      count += item.qty;
    })
    return count;
  }
  getTotalAmount = () => {
    const { Items } = this.state;
    let amt = 0;
    Items.forEach((item) => {
      amt += item.price*item.qty;
    })
    return amt;
  }
  render() {
    const { Items } = this.state;
    return (
      <div className="App">
        <NavBar
          count={this.getCountItems()} 
        />
        <Cart 
          Items={Items}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity}
        />
        <div style={{ padding: '10', fontSize: 30}}>Total Amount : {this.getTotalAmount()}</div>
      </div>
    );
  }
}

export default App;
