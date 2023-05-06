import { Router } from 'express';
import computerList from '../public/data/computers.json' assert { type: "json" };;

var router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'TheDigitalDen', computerList: computerList });
});

export default router;
