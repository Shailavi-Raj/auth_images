import React from "react";
import { Container, Grid, Row, Panel, Button, Col, Input } from "rsuite";
import { Icon } from "@rsuite/icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin">
      <Container>
        <Grid className="mt-page">
          <Row>
            <Col xs={24} md={12}>
              <Panel>
                <div className="text-center">
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
                  <h3>
                    {" "}
                    <b>Sign in</b> or <b>Sign Up</b>
                  </h3>{" "}
                </div>
                <br />
                <div className="mt-3">
                  <Button color="blue" appearance="primary" block>
                    <Icon icon="facebook" />
                    Continue with Facebook
                  </Button>
                  <br />
                  <Button color="green" appearance="primary" block>
                    <Icon icon="google" />
                    Continue with Google
                  </Button>
                </div>
                <center>
                  <h4>OR</h4>
                </center>
                <Input placeholder="Mobile" />
                <br />
                <p>Terms & Policy</p>
                <br />
                <Link
                  to="OtpMob"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button color="violet" appearance="primary" block>
                    Generate OTP
                  </Button>{" "}
                </Link>
                <br />{" "}
                <p>
                  need help &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;
                  <Link to="/signup"> SignUp</Link>
                </p>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default SignIn;
