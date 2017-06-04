var router = require('express').Router();
var controller = require('./categoryController.js');
var createRoutes = require('../../utils/createRoutes.js');

createRoutes(router,controller);

// router.param('id',function (req, res, next, id) {
//     controller.param(req, res, next, id);
// })
//
// router.route('/')
//     .get(controller.get)
//     .post(controller.post);
//
// router.route('/:id')
//     .get(controller.getOne)
//     .put(controller.put)
//     .delete(controller.delete)



module.exports  = router;
