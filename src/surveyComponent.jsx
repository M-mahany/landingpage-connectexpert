import { Question } from 'survey-core';
import { ElementFactory } from 'survey-core';
import {
  SurveyCreator,
  SurveyCreatorComponent,
} from 'survey-creator-react';
import 'survey-core/modern.css';
import 'survey-creator-core/survey-creator-core.css';
import { Serializer } from 'survey-core';
import {
  ReactQuestionFactory,
  SurveyQuestionElementBase,
} from 'survey-react-ui';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { createElement } from 'react';
import { json } from './survey';

const CUSTOM_TYPE = 'phone';

export class QuestionColorPickerModel extends Question {
  getType() {
    return CUSTOM_TYPE;
  }
}
export function registerColorPicker() {
  ElementFactory.Instance.registerElement(
    CUSTOM_TYPE,
    (name) => {
      return new QuestionColorPickerModel(name);
    }
  );
}
registerColorPicker();

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator();
  return <SurveyCreatorComponent creator={creator} />;
}
Serializer.addClass(
  CUSTOM_TYPE,
  [
    {
      name: 'phone',
    },
  ],
  function () {
    return new QuestionColorPickerModel('');
  },
  'question'
);
export class SurveyQuestionColorPicker extends SurveyQuestionElementBase {
  constructor(props) {
    super(props);
    this.state = { value: this.question.value };
  }
  get question() {
    return this.questionBase;
  }
  get value() {
    return this.question.value;
  }

  handleColorChange = (data) => {
    this.question.value = data;
  };

  // Support the read-only and design modes
  get style() {
    return this.question.getPropertyValue('readOnly') ||
      this.question.isDesignMode
      ? { pointerEvents: 'none' }
      : undefined;
  }

  renderColorPicker(type) {
    return (
      <PhoneInput
        placeholder="Enter phone number"
        defaultCountry="GB"
        value={this.value}
        onChange={this.handleColorChange}
      />
    );
  }

  renderElement() {
    return (
      <div style={this.style}>
        {this.renderColorPicker(this.type)}
      </div>
    );
  }
}
ReactQuestionFactory.Instance.registerQuestion(
  CUSTOM_TYPE,
  (props) => {
    return createElement(SurveyQuestionColorPicker, props);
  }
);
function SurveyCreatorRenderComponent() {
  const options = {
    showLogicTab: true,
  };
  const creator = new SurveyCreator(options);

  Serializer.addProperty('survey', {
    name: 'phone1',
  });
  creator.JSON = json;
  return <SurveyCreatorComponent creator={creator} />;
}

export default SurveyCreatorRenderComponent;
