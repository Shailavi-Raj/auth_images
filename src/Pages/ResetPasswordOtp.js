import React, { useState } from "react";
import { Container, Grid, Row, Panel, Button, Col, Input } from "rsuite";
import { Link } from "react-router-dom";
const ResetPasswordOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className="reset_password_otp">
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
                  <h3>Reset Password</h3>
                  <br />
                  <h5>Please Enter OTP to reset password</h5>
                  <br />
                  <p>
                    Sent to +91xxxxxxxxxx <Link to="edit_here"> Edit</Link>
                  </p>
                  <br />
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="otp-field"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                  <br />
                  <br />
                  <p>
                    Didn't get the code &nbsp; &nbsp;
                    <Link to="otp_is_send">Resend</Link>
                    <br />
                    <br />
                    <Input placeholder="New Password" />
                    <br />
                    <Input placeholder="Confirm Password" />
                    <br />
                    <Button color="violet" appearance="primary" block>
                      Confirm Changes
                    </Button>
                  </p>
                  <br />
                  <p>
                    Having Trouble Logging in?{" "}
                    <Link to="We_are_here_to_help"> Get Help</Link>
                  </p>
                </p>
                <br />
                <Link
                  to="/signin"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button color="violet" appearance="ghost" block>
                    Back To Sign In
                  </Button>{" "}
                </Link>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default ResetPasswordOtp;
