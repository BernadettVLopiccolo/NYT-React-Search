import React from "react";

const Results = props =>
<div className="resultContainer">
  <div  className="row">
    <div className="col-md-12">
       <h1>Results</h1>
    </div>
  </div>
  <div className="resultArticle">
  <ul className="list-group">
   {props.results.map(result =>
   	<li className="list-group-item" key={result.id}>
   </li>

</ul>
</div>
</div>