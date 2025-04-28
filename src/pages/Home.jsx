import React from "react";
import Form from "../components/Form/Form.jsx";
import { useNavigate } from "react-router-dom";

const Home = ({ onContinue }) => {
  const navigate = useNavigate();

  const handleContinue = (formData) => {
    onContinue(formData);
    navigate("/dashboard");
  };

  return (
    <div>
      <Form onContinue={handleContinue} />
    </div>
  );
};

export default Home;
