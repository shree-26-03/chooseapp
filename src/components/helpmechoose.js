import React, { useState, useEffect } from "react";
import "../css/helpmechoose.css";
import iphone15 from "../asset/15.jpg";
import phone from "../asset/phone.png";
import alan from "../asset/Alen_icon.png";

const HelpMeChoose = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const handleStartOver = () => {
    setStep(0);
    setSelections({});
    setRecommendation(null);
  };

  const handleOptionClick = (question, option) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [question]: option,
    }));
    handleNextStep();
  };

  const generateRecommendation = () => {
    setRecommendation({
      name: "iphone 155",
      price: "$50.00/mo",
      color: "Light Pink",
      capacity: "256 GB",
      paymentMethod: "AT&T Installment Plan",
      image: iphone15,
    });
  };

  useEffect(() => {
    if (step > steps.length) {
      generateRecommendation();
    }
  }, [step]);

  const steps = [
    {
      question: "Are you interested in a certain brand of phone?",
      options: ["Apple", "Samsung", "Other", "No preference"],
    },
    {
      question: "What are you looking for in a new phone?",
      options: ["I'm interested in fun features", "I want the best deals"],
    },
  ];

  if (
    selections["What are you looking for in a new phone?"] ===
    "I want the best deals"
  ) {
    steps.push(
      {
        question: "Are you trading in your device?",
        options: ["Yes", "No"],
      },
      {
        question: "What size screen would you prefer?",
        options: ['Large (6.1" - 7.3")', 'Standard (5.3" - 6.0")'],
      },
      {
        question: "How much would you like to spend each month?",
        options: ["Less than $20", "Between $20-$30", "More than $30"],
      }
    );
  } else {
    steps.push(
      {
        question: "What size screen would you prefer?",
        options: [
          'Large (6.1" - 7.3")',
          'Standard (5.3" - 6.0")',
          'Small (4.7" - 5.2")',
          "No preference",
        ],
      },
      {
        question: "How much would you like to spend each month?",
        options: ["Less than $20", "Between $20-$30", "More than $30"],
      }
    );
  }

  const progress = ((step / (steps.length + 1)) * 100).toFixed(0);

  return (
    <div className="helpmechoose-container">
      {step !== 0 && step <= steps.length && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      {step === 0 ? (
        <div className="initial-view">
          <div className="content">
            <div className="icon">
              <img src={phone} alt="Phone Icon" />
            </div>
            <h1>Help me choose a new phone</h1>
            <p>
              Answer a few quick questions and we'll recommend the perfect phone
              for you.
            </p>
            <p>This usually takes about 2 minutes.</p>
            <button className="get-started-btn" onClick={handleNextStep}>
              Get started
            </button>
          </div>
        </div>
      ) : step <= steps.length ? (
        <div className="question-view">
          <div className="question-content">
            <h1>{steps[step - 1]?.question}</h1>
            <div className="options">
              {steps[step - 1]?.options.map((option, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() =>
                    handleOptionClick(steps[step - 1]?.question, option)
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="navigation">
            <button className="nav-btn" onClick={handlePrevStep}>
              Back
            </button>
            {step > 1 && (
              <button className="nav-btn" onClick={handleStartOver}>
                Start over
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="result-view">
          <div className="result-content">
            <h1>We found the perfect phone!</h1>
            {recommendation && (
              <div className="recommendation-card">
                <div className="card-content">
                  <img
                    src={recommendation.image}
                    alt={recommendation.name}
                    className="phone-image"
                  />
                  <div className="phone-details">
                    <h2>{recommendation.name}</h2>
                    <p>Price: {recommendation.price}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {recommendation && (
            <>
              <div className="recommendation-details">
                <div className="detail-item">
                  <h3>Color</h3>
                  <p>{recommendation.color}</p>
                </div>
                <hr />
                <div className="detail-item">
                  <h3>Capacity</h3>
                  <p>{recommendation.capacity}</p>
                </div>
                <hr />
                <div className="detail-item">
                  <h3>Payment Method</h3>
                  <p>{recommendation.paymentMethod}</p>
                </div>
              </div>
              <hr />
            </>
          )}

          <button className="start-over-btn" onClick={handleStartOver}>
            Start over
          </button>
        </div>
      )}
      {/* <div className="order-now">
        <button className="order-now-btn">
          ORDER NOW
          <br />
          866-595-2662
        </button>
      </div> */}
    </div>
  );
};

export default HelpMeChoose;
