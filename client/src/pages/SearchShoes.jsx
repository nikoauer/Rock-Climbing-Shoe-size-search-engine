

export default function SearchShoes() {
    return(
<>
<div>
<h1>Looking for your next Shoe to crush your project?</h1>
<h4>Simply input the lenght of your foot into the search bar down below to find the perfect fit</h4>
</div>
<div className="main-search-input-wrap">
       <div className="main-search-input fl-wrap">
            <div className="main-search-input-item">
                <input type="text"  value="" placeholder="Search for shoes"></input>
            </div>
        <button className="main-search-button">Search</button>
    </div>
</div>
</>
    )
}