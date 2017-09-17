import React from "react";

const Search = props =>
<form>
<div className="form-group">
<label htmlFor="article">Articles:</label>
<input
onChange={props.handleInputChange}
value={props.topic}
name="topic"
type="text"
className="form-control"
placeholder="Topic for Articles"
id="topic"
/>
<input
onChange={props.handleInputChange}
value={props.startYear}
name="startYear"
type="text"
className="form-control"
placeholder="Start Year for Articles"
id="startYear"
/>
<input
onChange={props.handleInputChange}
value={props.endYear}
name="endYear"
type="text"
className="form-control"
placeholder="End Year for Articles"
id="endYear"
/>
<button onClick={props.handleFromSubmit} className="btn btn-primary">Search
</button>
</div>
</form>

export default Search;