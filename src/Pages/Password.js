import React from "react";
import { Container, Grid, Row, Panel, Button, Col, Input } from "rsuite";
import { Link } from "react-router-dom";

const Password = () => {
  return (
    <div className="password">
      <Container>
        <Grid>
          <Row>
            <Col xs={24} md={12}>
              <Panel>
                <p>
                  <h2
                    style={{
                      color: "blue",
                    }}
                  >
                    Yamak.ai
                  </h2>
                  <br />
                  <br />
                  <br />
                  <h3>Enter Password</h3>
                  <br />
                  <Link to="/reset_password">Forgot Password</Link>
                  <br />
                  <br />
                  <Input type="password" placeholder="Enter password" />
                  <br />
                  <input type="checkbox" /> &nbsp; Don't ask for OTP on this
                  device
                  <br /> <br />
                  <br />
                  <Link
                    to="/signin"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button color="violet" appearance="primary" block>
                      Sign In
                    </Button>{" "}
                  </Link>
                  <br />
                  <br />
                  <br />
                  <Link
                    to="/OtpMob"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button color="violet" appearance="ghost" block>
                      Get an OTP on your Mobile
                    </Button>{" "}
                  </Link>
                  <br />
                  <p>
                    Having Trouble Logging in?{" "}
                    <Link to="We_are_here_to_help"> Get Help</Link>
                  </p>
                </p>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Password;
