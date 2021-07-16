// take in a request
// talk to the service to get the data
// send back the response

import { Router } from "express";
import { add, index, show } from "../services/index.js";

const router = new Router();

// the : makes this a dynamic route, able to take in any word and :Character will be the key in the params obj.
router.get("/characters/:character", (req, res) => {
  res.status(200).json(show(req.params.character));
});

// Whenever we come to '/api/characters'
// ask the service to return all of the characters
// by using the imported index function
router.get("/characters", (_, res) => {
  // send back the '200' status code
  // with all of the characters as JSON
  res.status(200).json(index());
});

router.post("/characters", (req, res) => {
  res.status(201).json(add(req.body));
});

export default router;
