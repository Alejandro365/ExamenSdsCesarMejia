var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('emps');
  
  lib.getEmployees = (handler)=>{
    empColl.find({}).toArray(
      (err, docs) => {
        if (err){
          handler(err,null);
        }else{
          handler(null,docs);
        }
      }
    );
    // implementar
    // obtener todos los documentos
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
    empColl
    .find({"_id": new ObjectID(id)})
    .project({"email": 1, "phone": 1, "name": 1, "age": 1})
    .toArray(
      (err, docs)=>{
          if(err){
            console.log(err);
            handler(err, null);
          }else{
            handler(null, docs);
          }
      }
  );//toArray
}; // getDistBinItems
    // implementar
    // Obtener un Documento solo mostrar
    // email, phone, name y age
    //return handler(new Error("No Implementado"), null);

  lib.getEmployeesByCompany = (company, handler) => {
    // implementar
    // solo mostrar name, email, company
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByAgeRange = (ageLowLimit, ageHighLimit, handler) => {
    //implementar
    // Mostrar todos los documento incluyendo los extremos
    // que esten entre las edades indicadas por los parametros
    // ageLowLimit y ageHighLimit
    // solo mostrar name, age, email
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    //implementar
    // obtener todos los documentos que contenga 
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    //Implementar
    //Se requiere eliminar un documento de la colección
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}


module.exports = employeeModel;
