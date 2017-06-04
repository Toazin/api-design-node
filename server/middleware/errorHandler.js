module.exports = function () {
    return function (err,req,res,next) {
        console.log("Error detected: ", err.type, err.message);
        var errType = err.type;
        switch (errType) {
            case 404:
                res.status(errType).json({message:err.message});
                break;
            default:
                res.status(500).json({error:err.message});
        }
        //console.log("Error detected: ", err.message);
        //res.status(500).json({error:err.message});
    }
};
