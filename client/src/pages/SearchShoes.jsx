import Container from 'react-bootstrap/Container';

export default function SearchShoes() {
    return(
<>
<div className="text-center" id="landingpage">
<h1>Looking for your next Shoe to crush your project?</h1>
<h5>Simply input the length of your foot to find the perfect shoe</h5>
</div>
<Container fluid>
<form className="p-3">
    <div className="col-12 col-md-8 col-sm-6 container">
        <input id="search-bar"></input>
        <button className="fa-solid fa-magnifying-glass" id="search-btn"></button>
    </div>
</form>
</Container>
</>
    )
}