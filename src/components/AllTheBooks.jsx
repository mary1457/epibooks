

import { Card, Col, Row , Button} from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
const AllTheBooks = () => {
  return (
    <Row className="g-2  mt-3">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={6} lg={4} xl={2} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
            <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                      {book.category}
                      </Card.Text>
                      <Button variant="primary"> {book.price}</Button>
                    </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks
