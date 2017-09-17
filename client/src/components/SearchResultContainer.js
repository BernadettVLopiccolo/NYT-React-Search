import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        results: []
    };

    componentDidMount() {
        this.searchArticle("movies");
    }

    searchArticle = query => {
        API.search(query)
            .then(res => this.setState({
                results: res.data.data
            }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.topic || !this.state.startYear || !this.state.endYear) {
            alert("Please fill out the form before submitting!");
        } else {
            this.searchArticle(this.state.search);
        }

    };


    render() {
        return (
            <div>
            <Search 
            search = {this.state.search}
            handleFormSubmit = {this.handleFormSubmit}
            handleInputChange = {this.handleInputChange}
            />
            <Results results = {this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;