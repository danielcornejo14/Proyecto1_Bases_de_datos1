
module.exports = {readCatalogs}

const path = require('path');
var database = require('./database.service');

var dom = require('xmldom').DOMParser,
    fs = require('fs');

var xml2js = require('xml2js');
var xpath = require("xml2js-xpath");

function readCatalogs(){
  let xmlFile = fs.readFileSync(path.resolve('server/Catalogos-NoCatalogos/','CatalogoFinal1.xml'), 'utf8').toString();
  var parser = new xml2js.Parser();
  parser.parseString(xmlFile, function(err,result){
  
    for(var key in result['Datos']['Catalogos'][0]['Tipos_de_Documento_de_Identificacion'][0]['TipoIdDoc']){
      var name = result['Datos']['Catalogos'][0]['Tipos_de_Documento_de_Identificacion'][0]['TipoIdDoc'][key].$.Nombre;
      var Id = result['Datos']['Catalogos'][0]['Tipos_de_Documento_de_Identificacion'][0]['TipoIdDoc'][key].$.Id;
      //database.insertIdentityDocumentType(Id,name);
    }
    
    for(var key in result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'] ){
      var Id = result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'][key].$.Id;
      var name = result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'][key].$.Nombre;
      var salary = result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'][key].$.SalarioXHora;
      //database.insertJob(Id,name,salary);
  }
    for(var key in result['Datos']['Catalogos'][0]['Departamentos'][0]['Departamento'] ){
      var name = result['Datos']['Catalogos'][0]['Departamentos'][0]['Departamento'][key].$.Nombre;
      var Id = result['Datos']['Catalogos'][0]['Departamentos'][0]['Departamento'][key].$.Id;
      //database.insertDepartment(Id,name);
    }
    /*
    for(var key in result['Datos']['Empleados'][0]['Empleado']){
      var name = result['Datos']['Empleados'][0]['Empleado'][key].$.Nombre;
      var ValueDocumentId = result['Datos']['Empleados'][0]['Empleado'][key].$.ValorDocumentoIdentidad;
      var IdDepartment = result['Datos']['Empleados'][0]['Empleado'][key].$.IdDepartamento;
      var JobName = result['Datos']['Empleados'][0]['Empleado'][key].$.Puesto;
      var BirthDay = result['Datos']['Empleados'][0]['Empleado'][key].$.FechaNacimiento;
      console.log(BirthDay);
      database.insertEmployee(name,ValueDocumentId,IdDepartment,JobName,BirthDay);
    }
    */
    
  });


}
