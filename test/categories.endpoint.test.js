const chai  = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = require('chai').expect;
 
// Configure chai
chai.use(chaiHttp);
chai.should();

 
describe("Categories Endpoint", ()=> {
 it("should be unauthorized to get all categories without token", (done) => {
   chai.request(server)
   .get('/api/categories')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be unauthorized to insert new categories without token", (done) => {
   chai.request(server)
   .post('/api/categories')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be not found update categories without id", (done) => {
   chai.request(server)
   .put('/api/categories')
   .end((err, res) => {
     res.should.have.status(404);
     done();
   });
 });
 it("should be unauthorized to delete categories without token", (done) => {
   chai.request(server)
   .delete('/api/categories')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
})