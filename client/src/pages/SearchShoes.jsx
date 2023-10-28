import { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
import { GET_SHOES_BY_SIZE } from '../utils/queries';

// import Auth from '../utils/auth';

export default function SearchShoes() {

    const [searchInput, setSearchInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [getShoesBySize, {loading, data}] = useLazyQuery(GET_SHOES_BY_SIZE) 

    const handleInputChange = async (event) => {
        event.preventDefault();

        const inputValue = event.target.value;

        const regex = /^[0-9.]+$/;

        if(regex.test(inputValue) || inputValue === '') {
            setSearchInput(inputValue);
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter only numbers and decimal points.');
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        getShoesBySize({ variables: { size: parseFloat(searchInput) } });
      };
    return(
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
        onChange={handleInputChange}></input>
        <button className="fa-solid fa-magnifying-glass" id="search-btn" type='submit' onClick={handleSubmit}></button>
    </div>
</form> 
<Container>
    <Row className="justify-content-md-center">
        <Col md="auto">
            {errorMessage && <Alert variant="warning" className="text-center" id="alert">{errorMessage}</Alert>}
        </Col>
    </Row>
</Container>
</Container>
{loading && <p>Loading...</p>}
      {!loading && data && data.getShoesBySize.map(({ Model, Brand, SoleSize, _id, Width }) => (
        <div key={_id}>
          <p>Model: {Model}</p>
          <p>Brand: {Brand}</p>
          <p>Sole Size: {SoleSize}</p>
          <p>Width: {Width}</p>
        </div>
      ))}
</>
    )
}