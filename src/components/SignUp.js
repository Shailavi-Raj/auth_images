import React from "react";
import { Container, Grid, Row, Panel, Button, Col, Input } from "rsuite";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
      <Container>
        <Grid>
          <Row>
            <Col xs={24} md={12}>
              <Panel>
                <div className="text-center">
                  {" "}
                  <h2
                    style={{
                      color: "blue",
                    }}
                  >
                    Yamak.ai
                  </h2>
                </div>
                <br />
                <div>
                  <h3>Create An Account</h3>
                </div>
                <br />

                <div>
                  {" "}
                  <Button color="blue" appearance="ghost" block>
                    Continue with Facebook
                  </Button>
                </div>
                <br />
                <Button color="green" appearance="ghost" block>
                  Continue with Google
                </Button>

                <center>
                  <hr>
                    {" "}
                    <h4>OR</h4>
                  </hr>
                </center>
                <Row>
                  <Col>
                    <Input placeholder="First Name" />{" "}
                  </Col>
                  <Col>&nbsp;</Col>
                  <Col>
                    <Input placeholder="Last Name" />
                  </Col>
                </Row>
                <br />
                <Input placeholder="Email/Mobile Number" />
                <br />
                <Input placeholder="Password" type="password" />
                <br />
                <p>
                  It contains atleast 6-15 characters and one
                  Uppercase,lowercase,Symbol,special characters and numbers.{" "}
                </p>
                <br />
                <Input placeholder="Re-Enter Password" type="password" />
                <br />
                <p>Terms & Policy</p>
                <br />
                <Button color="violet" appearance="primary" block>
                  Create An Account
                </Button>
                <br />
                <center>
                  {" "}
                  <p>
                    Already have an Account? <Link to="/"> Sign-In</Link>
                  </p>
                </center>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
