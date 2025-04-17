import React, { useState } from "react";

const SignIn = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <div className="flex items-center justify-center w-screen px-4 mt-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md border-2">
        {/* Heading */}
        <h2 className="text-2xl sm:text-2xl font-semibold text-center mb-1">Expense Tracker</h2>
        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
          Sign in to manage your expenses
        </p>

        {/* Tabs */}
        <div className="flex mb-4 bg-gray-100 rounded-lg overflow-hidden border-2">
          <button
            onClick={() => setIsRegistering(false)}
            className={`w-1/2 py-2 font-medium text-sm sm:text-base transition ${
              !isRegistering ? "bg-white shadow text-black" : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className={`w-1/2 py-2 font-medium text-sm sm:text-base transition ${
              isRegistering ? "bg-white shadow text-black" : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        {/* Register Form */}
       
          <form className="space-y-4 border rounded-lg p-4 sm:p-6">
            {isRegistering ? <div>
              <label className="block mb-1 font-medium text-sm">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div> : "" }
            
            <div>
              <label className="block mb-1 font-medium text-sm">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div>
            {isRegistering ? <div>
              <label className="block mb-1 font-medium text-sm">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div> : "" }
            
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition text-sm sm:text-base"
            >
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>
        
      </div>
    </div>
  );
};

export default SignIn;
