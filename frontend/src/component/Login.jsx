import React from "react";

const Login = () => {
  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };
  const fieldStyle = { display: "block", marginBottom: "8px" };

  return (
    <div className="flex flex-col h-screen bg-zinc-100">
      <h1 className="text-4xl text-center mt-28">
        Make the most of your professional life
      </h1>
      <div className="container w-1/4 mx-auto mt-9 border rounded-lg bg-white p-6">
        <form>
          <label
            htmlFor="email"
            style={fieldStyle}
            className="text-gray-700 font-semibold"
          >
            Email
          </label>
          <input type="email" name="email" id="email" style={inputStyle} />
          <label
            htmlFor="password"
            style={fieldStyle}
            className="text-gray-700 font-semibold"
          >
            Password(6+ characters)
          </label>
          <input type="password" name="" style={inputStyle} />
        </form>
      </div>
    </div>
  );
};

export default Login;
