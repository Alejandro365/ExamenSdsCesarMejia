var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/all', (req, res, next) => {

      empModel.getEmployees(
        (err, docs)=>{
          if(err){
            console.log(err);
            return res.status(500).json({error: "Error al mostrar All"});
          }
          return res.status(200).json(docs);
      }
    )
  });//all

  router.get("/byid/:id", function (req, res, next){
    empModel.getEmployeesById(req.params.id, (err, docs) => {
      if(err){
        console.log(err);
         return res.status(500).json({error: "Error"});
      }else{
        return res.status(200).json({docs});
      }
    })
  });

  
  return router;
}

module.exports = initEmployee;
