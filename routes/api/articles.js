const router = require("express").Router();
const axios = require("axios");
const articleController = require("../../controllers/articleController")
const APIKEY = "3f45657060084093b45d99bb4190658c&limit=5";


router.get("/articles", (req, res) => {
	axios
     .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      APIKEY + "&q=", {params.req.query})
     .then(({ data: { results } }) => res.json(results))
     .catch(err => res.status(422).json(err));
});

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
  router
   .route("/:id")
   .get(articleController.findById)
   .put(articleController.update)
   .delete(articleController.remove)

module.exports = router;
