import React from "react";
import { Container, Grid, Row, Panel, Button, Col } from "rsuite";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="reset_password">
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
                  <br />
                  <br />
                  <br />
                  <h3>Reset Password</h3>
                  <br />
                  <input type="checkbox" /> &nbsp;Sent to +91xxxxxxxxxx
                  <br />
                  <br />
                  <input type="checkbox" /> &nbsp;Sent to @gmail.com
                  <br />
                  <br />
                  <Link
                    to="/reset_password_otp"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button color="violet" appearance="primary" block>
                      Generate OTP
                    </Button>{" "}
                  </Link>
                  <br />
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

export default ResetPassword;
