//function
var testRouter = require('express').Router();

testRouter.route('/')
    .get(function (req, res) {
        throw new Error('Opps!');
        res.status(200).json({message:"OK"});
    })
// testRouter.get('/', function (req, res) {
//     res.status(200).json({message:"OK"});
// });

testRouter.post('/', function (req, res) {
    res.status(200).json({message:"OK"});
});


module.exports = testRouter;
