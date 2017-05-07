const app = require("./index.js")   //creating const app and setting it to require our index file which is express
const db = app.get("db")           //creating const db and having it equal app.get("db") is referencing our database
                                  //we brought in through the index file. when we say db.dosomething it refers to our db folder holding an sql file.

module.exports = {


  Cameras: function(req, res){
  db.get_product([req.params.id], function(err, response){
    res.status(200).send(response)  //[0]index zero returns AI 6.5 creedmoor
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
