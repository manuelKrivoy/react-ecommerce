import { Image, Col, Row, Container, Card } from "react-bootstrap";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  // Verificar si item es null antes de intentar acceder a sus propiedades
  if (!item) {
    return <div>Cargando...</div>; // O cualquier otro indicador de carga que desees mostrar
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={item.img} alt={item.title} fluid style={{ border: "2px solid black" }} />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title style={{ fontSize: "2.5rem" }}>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text style={{ fontSize: "2rem", fontWeight: "bold", color: "green" }}> ${item.price}</Card.Text>
              <CounterContainer stock={item.stock} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
