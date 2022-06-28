import { Application } from "express";
import request from "supertest";
import createServer from "../src/server";

const app: Application = createServer();

describe("server checks", () => {
  describe("Routes", () => {
    describe("POST /shrinkUrl", () => {
      it("when fullUrl path is invalid redirects to root route", (done) => {
        request(app)
          .post("/shrinkUrl")
          .send("fullUrl=googlecom")
          .expect("Location", "/")
          .expect(302, done);
      });

      it("shrinks an URL and redirects to viewUrl route", (done) => {
        request(app)
          .post("/shrinkUrl")
          .send("fullUrl=http://www.google.com")
          .expect("Location", "/viewUrl/1")
          .expect(302, done);
      });
    });

    describe("GET /:shortUrl", () => {
      it("when :shortUrl does not exists gets redirected to root route", (done) => {
        request(app).get("/xcasdw").expect("Location", "/").expect(302, done);
      });

      it("when :shortUrl exists in DB then redirects to fullUrl", (done) => {
        request(app)
          .get("/aV5U9k")
          .expect("Location", "http://www.google.com")
          .expect(302, done);
      });
    });

    describe("GET /viewUrl/:id", () => {
      it("renders the viewUrl", (done) => {
        request(app).get("/viewUrl/1").expect(200, done);
      });
    });

    describe("GET /deleteUrl/:id", () => {
      it("when id does not exists gets redirected to root route", (done) => {
        request(app)
          .get("/deleteUrl/859")
          .expect("Location", "/")
          .expect(302, done);
      });

      it("when URL gets deleted successfully then redirects to root route", (done) => {
        request(app)
          .get("/deleteUrl/1")
          .expect("Location", "/")
          .expect(302, done);
      });
    });
  });
});
