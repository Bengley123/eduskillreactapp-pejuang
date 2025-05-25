import React from "react";
import Button from "../Elements/Button/index";

const StatusStepper = ({ steps, currentStep, onFeedback }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Status Lamaran</h3>
      <ol className="relative border-l-2 border-gray-300 ml-4">
        {steps.map((step, index) => {
          const isCompleted = index <= currentStep;
          return (
            <li key={index} className="mb-10 ml-6 relative">
              <span
                className={`absolute flex items-center justify-center w-4 h-4 rounded-full 
                  -left-5 top-1 
                  ${isCompleted ? "bg-blue-600" : "bg-gray-300"}`}
              />
              <p
                className={`${
                  isCompleted
                    ? "text-blue-700 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {step}
              </p>

              {step === "Feedback Pelatihan" && currentStep >= 3 && (
                <div className="mt-2">
                  <Button variant="secondary" size="sm" onClick={onFeedback}>
                    Beri Feedback
                  </Button>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StatusStepper;
