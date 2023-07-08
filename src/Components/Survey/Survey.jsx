import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import {
  ReactSurveyElement,
  ReactElementFactory,
} from 'survey-react-ui';
import 'survey-core/modern.min.css';
import { json } from '../../survey';
import { postcodeValidator } from 'postcode-validator';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../firebase';

class PercentageProgressBar extends ReactSurveyElement {
  render() {
    return (
      <div className="sv-progressbar-percentage">
        <div className="sv-progressbar-percentage__title">
          <span>{this.props.model.progressTitle}</span>
        </div>
        <div className="sv-progressbar-percentage__indicator">
          <div
            className="sv-progressbar-percentage__value-bar"
            style={{
              width: this.props.model.progressValue + '%',
            }}
          ></div>
        </div>
        <div className="sv-progressbar-percentage__value">
          <span>
            {this.props.model.progressValue + '%'}
          </span>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  'sv-progressbar-percentage',
  (props) => {
    return React.createElement(
      PercentageProgressBar,
      props
    );
  }
);
function validateZipCode(_, options) {
  if (options.name === 'PostalCode') {
    const ZipCode = options.value;

    if (!ZipCode) return;
    if (!postcodeValidator(ZipCode, 'UK')) {
      options.error = 'Please provide a valid UK postcode';
    }
  }
}
function validatePhoneNumber(_, options) {
  if (options.name === 'TelephoneNumber') {
    const phoneNumber = options.value;

    if (!phoneNumber) return;
    if (!isValidPhoneNumber(phoneNumber)) {
      options.error = 'Please provide a valid Phone Number';
    }
  }
}

function SurveyComponent() {
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    const surveyData = sender.data;
    const sendToFirebase = async () => {
      await addDoc(collection(db, 'surveys'), surveyData);
    };
    sendToFirebase();
  });
  survey.addLayoutElement({
    id: 'progressbar-percentage',
    component: 'sv-progressbar-percentage',
    container: 'contentTop',
    data: survey,
  });
  survey.onValidateQuestion.add(validateZipCode);
  survey.onValidateQuestion.add(validatePhoneNumber);
  return <Survey model={survey} />;
}

export default SurveyComponent;
