import React from "react";
import Form from "../components/Form/Form.jsx";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa"

const Home = ({ onContinue }) => {
  const navigate = useNavigate();

  const handleContinue = (formData) => {
    onContinue(formData);
    navigate("/dashboard");
  };

  return (
    <div>
      <Form onContinue={handleContinue} />
      <footer className="bg-blue-950 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Abhinash. All rights reserved.
        </p>
        <div className="flex justify-center items-center mt-2 space-x-2">
          <FaLinkedin className="text-blue-400" />
          <a
            href="https://www.linkedin.com/in/abhinash-singh-contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm hover:text-blue-300"
          >
            linkedin.com/in/Abhinash
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
