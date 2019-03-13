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

  router.get("/bycompany/:company"), function(req, res, next){
    empModel.getEmployeesByCompany(req.params.company, (err, docs) => {
      if(err){
        console.log(err);
         return res.status(500).json({error: "Error"});
      }else{
        return res.status(200).json({docs});
      }
    });
  }

  router.put('/addtag/:id', (req, res, next) =>{
    empModel.addEmployeeATag((req.body.id || '').split('|'), req.params.id, (err, rs)=>{
      if(err){
          console.log(err);
          return res.status(500).json({"error":"No se puede actualizar"});
        }else{
          return res.status(200).json(rs);
        }
  });//end
  });

  router.delete('/delete/:id', function(req, res, next){
    var _employeeID = req.params.id;
    empModel.removeEmployee(_employeeID, (err, rs) =>{
        if(err){
            return res.status(500).json({"error":"No se pudo eliminar dato"});
        }else{
            return res.status(200).json(rs);
        }
    })
  });

  router.get('/bytags/:tag', (req, res, next)=>{
    empModel.getEmployeesByTag((req.params.tag || '').split('_'), (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"No se encontro tag"});
      }else{
        return res.status(200).json(docs);
      }
    } );//searchByTag
  });//bytag


  
  return router;
}

module.exports = initEmployee;
