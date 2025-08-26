import React, { useState } from 'react';
import OtpBox from '../otpBox';
import Button from '@mui/material/Button';

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handleChangeOtp = (value) => {
    setOtp(value);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    alert({otp});
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-12">
          <div className="text-center flex items-center justify-center">
            <img src="/verify.png" alt="Verify" width="80" />
          </div>
          <h3 className="text-center text-[18px] mt-4">Verify OTP</h3>
          <p className="text-center mt-2">
            OTP sent to <span className="text-[#ff5252] font-bold">bilalkhan@gmail.com</span>
          </p>

          <form onSubmit={verifyOtp}>
            <OtpBox onChange={handleChangeOtp} />
            <Button type="submit" className="w-full btn-org p-3" variant="contained" color="primary">
              Verify OTP
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
