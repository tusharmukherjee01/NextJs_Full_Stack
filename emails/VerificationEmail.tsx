import React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }:VerificationEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#4CAF50", textAlign: "center" }}>
        Welcome, {username}!
      </h2>
      <p>
        Thank you for signing up! To complete your registration, please verify
        your email address using the one-time password (OTP) below:
      </p>
      <div
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "10px 20px",
          textAlign: "center",
          borderRadius: "4px",
          margin: "20px 0",
        }}
      >
        {otp}
      </div>
      <p>If you did not request this, please ignore this email.</p>
      <p>
        Best regards,
        <br />
        <strong>Tushar Mukherjee</strong>
      </p>
    </div>
  );
};


