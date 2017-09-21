import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { topicInput, startYearInput, endYearInput, FormBtn } from "../../components/Form";
import "./Articles.css";
class Articles extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
    topic: "",
    startYear: 0,
    endYear: 0,
  };

  // When the component mounts, load all articles and save them to this.state.articles
  componentDidMount() {
    this.loadArticles();
  }

  // Loads all articles  and sets them to this.state.articles
  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a article from the database with a given id, then reloads articles from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveArticle method to save the article data
  // Then reload articles from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.saveArticle({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="search">Search</h1>
            <form>
              <topicInput
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <startYearInput
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="StartYear (required)"
              />
              <endYearInput
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="EndYear (required)"
              />
              <FormBtn
                disabled={!(this.state.startYear && this.state.topic && this.state.endYear)}
                onClick={this.handleFormSubmit}
              >
              </FormBtn>
            </form>
            </Jumbotron>
          </Col>
          </Row>
          <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="results">Results</h1>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={"/articles/" + article._id}>
                        <strong>
                          {article.topic} from {article.startYear} to {article.endYear}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
        <Jumbotron>
        <h1 className="savedArticles">Saved Articles</h1>
         Renders the saved Articles
         </Jumbotron>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
