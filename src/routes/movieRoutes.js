import express from "express";

const router = express.Router();

router.get('/hello', (req,res) => {
    res.json({message: "hello"});
});


router.get('/', (req,res) => {
    res.json({message: "Yoo"});
});
export default router;