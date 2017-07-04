import "mocha";

import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

import * as index from "../src/index";

chai.use(sinonChai);

let sandbox: sinon.SinonSandbox;
let subject: any;

beforeEach(() => {
  sandbox = sinon.sandbox.create();
});

afterEach(() => {
  sandbox.restore();
});
