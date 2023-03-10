//The environment variable is set to test so that you will be able to perform the tests on another database,
//as mentioned in the test.json of the config folder
process.env.NODE_ENV = "test";

const mysql = require("mysql2");
const config = require("config");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const db = require("../orm");
const should = chai.should();

chai.use(chaiHttp);

describe("Blog Server with Database Interaction", () => {
  let dbConnection;
  beforeEach((done) => {
    dbConnection = mysql.createConnection({
      ...config,
      multipleStatements: true,
    });
    dbConnection.connect();

    const tablename = "posts"; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query(
      `SET FOREIGN_KEY_CHECKS=0;
    TRUNCATE TABLE ${tablename};
    SET FOREIGN_KEY_CHECKS=1;
    `,
      done
    );
  });

  afterEach(() => {
    dbConnection.end();
  });

  after(() => {
    db.sequelize.close();
  });

  /*
   * Test the /GET route
   */
  describe("Should output all posts from the DB", () => {
    it("it should GET an empty array for empty table", (done) => {
      chai
        .request(server)
        .get("/api/posts/getAll")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array").that.is.empty;
          done();
        });
    });

    it("it should GET all records stored in the database table", (done) => {
      //TODO - fill the column names depending on the schema you designed
      let queryString = `INSERT INTO posts (title, content, posterId, createdAt, updatedAt) VALUES (?);
      INSERT INTO posts (title, content, posterId, createdAt, updatedAt) VALUES (?);
      INSERT INTO posts (title, content, posterId, createdAt, updatedAt) VALUES (?);`;

      //TODO - provide example values matching respective field types
      const now = new Date();
      let queryArgs = [
        ["1", "one", 1, now, now],
        ["2", "two", 2, now, now],
        ["3", "three", 3, now, now],
      ];

      dbConnection.query(queryString, queryArgs, (err, result) => {
        if (err) throw err;
        chai
          .request(server)
          .get("/api/posts/getAll")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an("array");
            res.body.length.should.be.eql(3);
            res.body.forEach((element) => {
              element.should.be.an("object");
              //TODO - add values that match the queryArgs you provided for title field
              element.should.have
                .property("title")
                .that.is.oneOf(["1", "2", "3"]);
            });
            done();
          });
      });
    });
  });

  /*
   * Test the /POST route
   */
  describe("Should insert new posts to the blog database", () => {
    it("it should not add a post without title field", (done) => {
      const post = {
        content: "New post without a title",
      };
      chai
        .request(server)
        .post("/api/posts/add")
        .send(post)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.an("object");
          res.body.should.have
            .property("name")
            .that.is.eql("SequelizeValidationError");
          res.body.should.have.property("errors").that.is.an("array");
          done();
        });
    });

    it("it should add a new valid post", (done) => {
      //TODO - build an object that holds all the required fields present in your database table
      let post = {
        title: "Valid post",
        content: "Some content for a valid post..",
        posterId: 1,
      };
      chai
        .request(server)
        .post("/api/posts/add")
        .send(post)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an("object");
          res.body.should.have.property("title").that.is.eql("Valid post");
          res.body.should.have.property("id").that.is.a("number");
          done();
        });
    });
  });
});
