const chai  = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = require('chai').expect;
 
// Configure chai
chai.use(chaiHttp);
chai.should();

 
describe("Roles Endpoint", ()=> {
 it("should be unauthorized to get all roles without token", (done) => {
   chai.request(server)
   .get('/api/roles')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be unauthorized to insert new roles without token", (done) => {
   chai.request(server)
   .post('/api/roles')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be not found update roles without id", (done) => {
   chai.request(server)
   .put('/api/roles')
   .end((err, res) => {
     res.should.have.status(404);
     done();
   });
 });
 it("should be unauthorized to delete roles without token", (done) => {
   chai.request(server)
   .delete('/api/roles')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
})