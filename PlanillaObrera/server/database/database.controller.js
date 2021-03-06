const express = require('express');
const router = express.Router();
const dbService = require('./database.service');

//--------routes---------
//gets
router.get('/getAllEmployees', getAllEmployees);
router.get('/getAllJobs', getAllJobs);
router.get('/getAllDepartments', getAllDepartments);
router.get('/getAllIdentiryDocumentType', getAllIdentityDocumentType);
//Post
router.post('/selectEmployees', selectEmployees);
router.post('/addEmployee', addEmployee);
router.post('/addJob', addJob);
router.post('/deleteEmployee', deleteEmployee);
router.post('/deleteJob', deleteJob);
router.post('/editEmployee', editEmployee);
router.post('/editJob', editJob);




module.exports = router;

//Employees---------------------------------------------------
function selectEmployees(req, res, next){
    console.log(req.body.search);
    dbService.selectEmployees(req.body.search)
    .then(employees => employees ? res.json(employees) : res.status(404).json({message: "content not found"}))
    .catch(err => next(err))
}
function getAllEmployees(req, res, next){
    dbService.getAllEmployees()
    .then(employees => employees ? res.json(employees) : res.status(404).json({message: "content not found"}))
}

function addEmployee(req, res, next){
    console.log(req.body);
    dbService.insertEmployee(req.body.Name, req.body.IdTypeDoc, req.body.ValueDocIdentity, req.body.IdDepartment, req.body.IdJob, req.body.BirthDay)
}

function deleteEmployee(req, res, next){
    console.log(req.body.Id);
    dbService.deleteEmployee(req.body.Id)
}

function editEmployee(req, res, next){
    console.log(req.body)
    dbService.editEmployee(req.body.Id, req.body.Name, req.body.IdTypeDoc, req.body.ValueDocIdentity, req.body.IdDepartment, req.body.IdJob, req.body.BirthDay)
}
//Jobs-------------------------------------------------------
function getAllJobs(req, res, next){
    dbService.getAllJobs()
    .then(Jobs => Jobs ? res.json(Jobs) : res.status(404).json({message: "content not found"}))
}

function deleteJob(req, res, next){
    dbService.deleteJob(req.body.Id);
}

function addJob(req,res,next){
    dbService.insertJob(req.body.Id, req.body.NameJob, req.body.SalaryXHour);
}

function editJob(req, res, next){
    dbService.editJob(req.body.Id, req.body.NameJob, req.body.SalaryXHour)
}

//Department-------------------------------------------------

function getAllDepartments(req, res, next){
    dbService.getAllDepartments()
    .then(Department => Department ? res.json(Department) : res.status(404).json({message: "content not found"}))
}

//IdentityDocumentType---------------------------------------

function getAllIdentityDocumentType(req, res, next){
    dbService.getAllIdentityDocumentType()
    .then(IdDocType => IdDocType ? res.json(IdDocType) : res.status(404).json({message: "content not found"}))
}