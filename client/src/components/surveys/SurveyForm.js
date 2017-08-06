// SurveyForm shows a form for a suer to add input
import React, { Component } from "react";
import { reduxForm } from "redux-form";

class SurveyForm extends Component {
  render() {
    return <div>SurveyForm</div>;
  }
}

export default reduxFrom({
  form: "surveyForm"
})(SurveyForm);
