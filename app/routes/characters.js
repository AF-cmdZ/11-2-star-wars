import { Router } from "express";
import { index } from "../services/index.js";
const router = new Router();

// Whenever we come to '/api/characters' 
// ask the service to return all of the characters
// by using the imported index function
router.get('/characters', (req, res) => {
    // send back the '200' status code
    // with all of the characters as JSON
    res.status(200).json(index());
});

export default router;
