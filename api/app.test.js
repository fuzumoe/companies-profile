const request = require('supertest');

const app = require('./app');


describe("GET /profiles.json", () => {
  it("should return all products", async () => {
    const resPramless = await request(app).get("/profiles.json");

    expect(resPramless.statusCode).toBe(200);
    expect(resPramless.body.length).toBeGreaterThan(0);

    const resPramName = await request(app).get("/profiles.json/?name=Fire Co");

    expect(resPramName.statusCode).toBe(200);
    expect(resPramName.body.length).toBeGreaterThan(0);

    
    const resPramSpec = await request(app).get("/profiles.json/?specialities=electrical");

    expect(resPramSpec.statusCode).toBe(200);
    expect(resPramSpec.body.length).toBeGreaterThan(0);

    const resPramNameSpec = await request(app).get("/profiles.json/?name=Fire Co.&specialities=electrical,plumbing,excavation");

    expect(resPramNameSpec.statusCode).toBe(200);
    expect(resPramNameSpec.body.length).toBeGreaterThan(0);


 



  });
});