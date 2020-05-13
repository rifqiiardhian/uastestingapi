const chai  = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = require('chai').expect;
 
// Configure chai
chai.use(chaiHttp);
chai.should();

 
describe("Products Endpoint", ()=> {
 it("should be unauthorized to get all products without token", (done) => {
   chai.request(server)
   .get('/api/products')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be unauthorized to insert new products without token", (done) => {
   chai.request(server)
   .post('/api/products')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be not found update products without id", (done) => {
   chai.request(server)
   .put('/api/products')
   .end((err, res) => {
     res.should.have.status(404);
     done();
   });
 });
 it("should be unauthorized to delete products without token", (done) => {
   chai.request(server)
   .delete('/api/products')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
})