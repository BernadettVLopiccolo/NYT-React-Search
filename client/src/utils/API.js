import axios from "axios";
const BASEURL = "https://www.nytimes.com/?t=";
const APIKEY = "&apikey=3f45657060084093b45d99bb4190658c&limit=5";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
