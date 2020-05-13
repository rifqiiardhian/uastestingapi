const chai  = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = require('chai').expect;
 
// Configure chai
chai.use(chaiHttp);
chai.should();

 
describe("Users Endpoint", ()=> {
 it("should be unauthorized to get all users without token", (done) => {
   chai.request(server)
   .get('/api/users')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be unauthorized to insert new users without token", (done) => {
   chai.request(server)
   .post('/api/users')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be not found update users without id", (done) => {
   chai.request(server)
   .put('/api/users')
   .end((err, res) => {
     res.should.have.status(404);
     done();
   });
 });
 it("should be unauthorized to delete users without token", (done) => {
   chai.request(server)
   .delete('/api/users')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
})