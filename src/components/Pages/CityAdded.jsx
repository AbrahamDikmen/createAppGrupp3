import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function CityAdded() {
    // fetching locally stored cities from utility function did not return 
    // the updated data, it must therefore be fetched directly from component
    let storedCities;
    try {
        storedCities = JSON.parse(localStorage.storedCities);
    } catch (error) {
        storedCities = [];
    }

    return <Container>
        <Row>
            <Col>
                <p>{storedCities[storedCities.length - 1]?.city} har lagts till! För att se se alla dina städer, gå till <Link to="/MinaStader">Mina Städer</Link></p>
            </Col>
        </Row>
    </Container>
}