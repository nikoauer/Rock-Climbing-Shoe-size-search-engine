import { useState } from "react";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { GET_SHOES_BY_SIZE } from "../utils/queries";

// import Auth from '../utils/auth';

export default function SearchShoes() {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const [getShoesBySize, { loading, data }] = useLazyQuery(GET_SHOES_BY_SIZE);

  const handleInputChange = async (event) => {
    event.preventDefault();

    const inputValue = event.target.value;

    const regex = /^[0-9.]+$/;

    if (regex.test(inputValue) || inputValue === "") {
      setSearchInput(inputValue);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter only numbers and decimal points.");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getShoesBySize({ variables: { size: parseFloat(searchInput) } });
    setSearchPerformed(true)
  };
  return (
    <>
      <div className="text-center" id="landingpage">
        <h1>Looking for your next Shoe to crush your project?</h1>
        <h5>Simply input the length of your foot to find the perfect shoe</h5>
      </div>
      <Container fluid>
        <form className="p-3">
          <div className="col-12 col-md-8 col-sm-6 container">
            <input
              id="search-bar"
              type="text"
              value={searchInput}
              onChange={handleInputChange}
            ></input>
            <button
              className="fa-solid fa-magnifying-glass"
              id="search-btn"
              type="submit"
              onClick={handleSubmit}
            ></button>
          </div>
        </form>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              {errorMessage && (
                <Alert variant="warning" className="text-center" id="alert">
                  {errorMessage}
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            {loading && <p>Loading...</p>}
            {!loading && data && data.getShoesBySize.length > 0 ? (
              data.getShoesBySize.map(
                ({
                  Model,
                  Brand,
                  Details,
                  SoleSize,
                  _id,
                  Width,
                  ToeBox,
                  USWomensSize,
                  USMensSize,
                }) => (
                  <Card key={_id} id="Shoe-cards">
                    <Card.Header id="title">Brand: {Brand} <br /> Model: {Model}</Card.Header>
                    <Card.Body className="body" id="information">
                      <Card.Text id="contents">Sole Size: {SoleSize} centimeters</Card.Text>
                      <Card.Text id="contents">US Men's Size: {USMensSize}</Card.Text>
                      <Card.Text id="contents">US Women's Size: {USWomensSize}</Card.Text>
                      <Card.Text id="contents">Width: {Width}</Card.Text>
                      <Card.Text id="contents">ToeBox: {ToeBox}</Card.Text>
                      <Card.Text id="details">Details: {Details}</Card.Text>
                    </Card.Body>
                  </Card>
                )
              )
            ) : ( searchPerformed &&
              <Alert variant="warning" className="text-center" id="alert">
                Sorry, no shoes were found in our database that match this size
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
