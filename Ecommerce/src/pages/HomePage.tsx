import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <Row>
        {
        sampleProducts.map(products => 
        <Col key={products.slug} sm={6} md={4} lg={3}>
            <Link to={'/product/' + products.slug}>
          <img src={products.image} alt={products.name} className='product-image' />
          <h2>{products.name}</h2>
          <p>{products.price}</p>
            </Link>
        </Col>)}   
    </Row>
  )
}
