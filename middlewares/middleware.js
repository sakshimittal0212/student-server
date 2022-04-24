let middleware= function (req,res,next){
  console.log("API hitted "+ req.path + ' AT '+new Date())
  next();
}

let apiLogger= function (req,res,next){
    console.log("API hitted "+ req.path + ' AT '+new Date())
    next();
  }

  let xyz= function (req,res,next){
    console.log("API hitted "+ req.path + ' AT '+new Date())
    next();
  }

module.exports={
    middleware:middleware,
    apiLogger: apiLogger

}
    ;