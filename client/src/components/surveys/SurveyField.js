// SurveyField container logic to render a single label
import React from "react";

export default ({ input, label }) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <input {...input} />
    </div>
  );
};
