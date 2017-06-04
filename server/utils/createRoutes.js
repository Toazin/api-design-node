module.exports = function (router,controller) {
    router.param('id',controller.param)

    router.route('/')
        .get(controller.get)
        .post(controller.post);

    router.route('/:id')
        .get(controller.getOne)
        .put(controller.put)
        .delete(controller.delete)

}
