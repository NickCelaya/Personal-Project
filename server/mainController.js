const app = require("./index.js")   //creating const app and setting it to require our index file which is express
const db = app.get("db")           //creating const db and having it equal app.get("db") is referencing our database
                                  //we brought in through the index file. when we say db.dosomething it refers to our db folder holding an sql file.

module.exports = {


  Cameras: function(req, res){
  db.get_product_by_id([req.params.id], function(err, response){
    if(!err){
      db.get_image_by_id([req.params.id], function(err2, response2){
        if(!err2){
          db.get_productinfo_by_id([req.params.id], function(err3, response3){
            if(!err3){
              let obj = {
                product: response,
                images: response2,
                info: response3
              };
              res.status(200).send(obj)
            } else{
              res.status(500).send(err3)
            }

           })
        } else{
          res.status(500).send(err2)
        }

       })
    } else{
      res.status(500).send(err)
    }

   })
 },


  Products: function(req, res){
    db.products(function(err,products){
      res.status(200).send(products)
    })
  },


  productsInfo: function(req, res){
    db.productsInfo(function(err, productsInfo){
      res.status(200).send(productsInfo)
    })
  },


  images: function(req, res){
    db.imagesUrl(function(err, images){
      console.log(images);
      res.status(200).send(images)
    })
  }




//end of exports
}
