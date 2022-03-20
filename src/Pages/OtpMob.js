import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Row, Panel, Col, Button } from "rsuite";
import "../Styles/main.scss";
//import { Link } from "react-router-dom";

const OtpMob = () => {
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
    <div className="OtpMob">
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
                  <h3>Verify OTP</h3>
                  <br />
                  <p>
                    Sent +91xxxxxxxxxx&nbsp;&nbsp;
                    <Link to="edit_here"> Edit</Link>
                  </p>
                  <br />
                </p>
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
                <p>
                  <br />
                  <input type="checkbox" />
                  Don't ask for OTP on this device
                  <br /> <br />
                  OTP Entered - {otp.join("")}
                </p>{" "}
                <p>
                  <Button
                    onClick={(e) => setOtp([...otp.map((v) => "")])}
                    block
                  >
                    Clear
                  </Button>
                  <Button
                    color="violet"
                    appearance="primary"
                    onClick={(e) => alert("Entered OTP is " + otp.join(""))}
                    block
                  >
                    Generate OTP
                  </Button>
                  <br />
                  <br />
                  Didn't get the code &nbsp; &nbsp;
                  <Link to="otp_is_send">Resend</Link>
                </p>
                <br />
                <Link
                  to="/password"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button color="violet" appearance="ghost" block>
                    Continue using Password
                  </Button>{" "}
                </Link>
                <br />
                <br />
                <p>
                  Having Trouble Logging in?{" "}
                  <Link to="We_are_here_to_help"> Get Help</Link>
                </p>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default OtpMob;
