import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './PageCSS/Products.css'

const Products = () => {
  const products = [
    { id: 1, name: 'Shoes', description: 'Nike shoes with image.' },
    { id: 2, name: 'T-Shirt', description: 'Stylish cotton T-shirt.' },
    { id: 3, name: 'Jeans', description: 'Comfortable blue denim jeans.' },
    { id: 4, name: 'Watch', description: 'Premium wristwatch for daily use.' },
    { id: 5, name: 'Backpack', description: 'Durable backpack for college.' },
    { id: 6, name: 'Headphones', description: 'Wireless headphones with clear sound.' },
    { id: 7, name: 'Smartphone', description: 'Modern smartphone with advanced features.' },
    { id: 8, name: 'Laptop', description: 'Powerful laptop for work and study.' },
    { id: 9, name: 'Sunglasses', description: 'Trendy sunglasses with UV protection.' },
    { id: 10, name: 'Wallet', description: 'Premium leather wallet for men.' },
    { id: 11, name: 'Cap', description: 'Casual cap for everyday wear.' },
    { id: 12, name: 'Jacket', description: 'Stylish jacket for winter.' },
    { id: 13, name: 'Perfume', description: 'Refreshing fragrance for daily use.' },
    { id: 14, name: 'Bluetooth Speaker', description: 'Portable speaker with powerful sound.' },
    { id: 15, name: 'Keyboard', description: 'Comfortable keyboard for computer users.' },
    { id: 16, name: 'Mouse', description: 'Wireless mouse for smooth navigation.' },
    { id: 17, name: 'Football', description: 'Durable football for outdoor games.' },
    { id: 18, name: 'Running Shoes', description: 'Lightweight shoes for running and fitness.' },
    { id: 19, name: 'Water Bottle', description: 'Reusable water bottle for everyday use.' },
    { id: 20, name: 'Sofa', description: 'Comfortable sofa for your living room.' },
  ]

  return (
    <>
      <Header />
      <div className="products-page container">
        <h1>Our Products</h1>
        <ul className="products-grid">
          {products.map((product) => (
            <li className="product-card" key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Products