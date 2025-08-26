import React, { useRef, useState, useEffect } from 'react';

const OtpBox = ({ onChange }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // 👇 Call onChange whenever OTP changes
  useEffect(() => {
    const finalOtp = otp.join('');
    if (onChange) {
      onChange(finalOtp);
    }
  }, [otp]);

  return (
    <div style={styles.container}>
      <h2>Enter 6-digit OTP</h2>
      <div style={styles.otpBox}>
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={styles.input}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center'
  },
  otpBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0'
  },
  input: {
    width: '40px',
    height: '40px',
    fontSize: '24px',
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '5px',
    outline: 'none'
  },
};

export default OtpBox;
