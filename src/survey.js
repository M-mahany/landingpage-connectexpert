export const json = {
  surveyShowDataSaving: true,
  checkErrorsMode: 'onValueChanged',
  goNextPageAutomatic: true,
  title: 'Save by Comparing Telephone System Prices',
  progressBarType: 'questions',
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'radiogroup',
          name: 'Do-you-already-have-a-telephone-system?',
          title: 'Do you already have a telephone system?',
          isRequired: true,
          choices: [
            {
              value: 'Yes',
              text: 'Yes',
            },
            {
              value: 'No',
              text: 'No',
            },
          ],
        },
      ],
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'radiogroup',
          name: 'What-is-the-maximum-number-of-users-that-need-to-be-connected-to-the-system?',
          title:
            'What is the maximum number of users that need to be connected to the system?',
          isRequired: true,
          choices: [
            {
              value: '1-4',
              text: '1-4',
            },
            {
              value: '5-9',
              text: '5-9',
            },
            {
              value: '10-19',
              text: '10-19',
            },
            {
              value: '20-49',
              text: '20-49',
            },
            {
              value: '50+',
              text: '50+',
            },
          ],
        },
      ],
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'radiogroup',
          name: 'When-do-you-need-your-phone-system?',
          title: 'When do you need your phone system?',
          isRequired: true,
          choices: [
            {
              value: 'within-1-month',
              text: 'within 1 month',
            },
            {
              value: 'within-3-months',
              text: 'within 3 months',
            },
            {
              value: 'within-6-months',
              text: 'within 6 months',
            },
            {
              value: 'within-12-months',
              text: 'within 12 months',
            },
          ],
        },
      ],
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'checkbox',
          name: 'What-features-do-you-require?',
          title: 'What features do you require?',
          isRequired: true,
          choices: [
            {
              value: 'Phone Calling',
              text: 'Phone Calling',
            },
            {
              value: 'Home/mobile worker',
              text: 'Home/mobile worker',
            },
            {
              value: 'Call monitoring/recording',
              text: 'Call monitoring/recording',
            },
            {
              value: 'Contact center',
              text: 'Contact center',
            },
            {
              value: 'Audio/video conferencing',
              text: 'Audio/video conferencing',
            },
            {
              value: 'Other/unsure',
              text: 'Other/unsure',
            },
          ],
        },
      ],
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'radiogroup',
          name: 'What-type-of-business-are-you?',
          title: 'What type of business are you?',
          choices: [
            {
              value: 'Limited Company',
              text: 'Limited Company',
            },
            {
              value: 'Public Sector',
              text: 'Public Sector',
            },
            {
              value: 'Sole Trade',
              text: 'Sole Trader',
            },
            {
              value: 'Not a Business',
              text: 'Not a Business',
            },
            {
              value: 'Other',
              text: 'Other',
            },
          ],
        },
      ],
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'text',
          name: 'PostalCode',
          title: 'Company Postal Code',
          description:
            'Your postcode ensures quotes are as accurate as possible for your area.',
          isRequired: true,
          placeholder: 'Company Postal Code',
        },
      ],
    },
    {
      name: 'page7',
      elements: [
        {
          type: 'text',
          name: 'CompanyEmail',
          title: 'Company Email',
          description:
            'Almost done! Fill in the last few details to request your free quotes!',
          isRequired: true,
          inputType: 'email',
          placeholder: 'eg. jhon@company.com',
        },
      ],
    },
    {
      name: 'page8',
      elements: [
        {
          type: 'text',
          name: 'FullName',
          title: 'Full Name',
          isRequired: true,
          placeholder: 'eg. jhon',
        },
        {
          type: 'text',
          name: 'CompanyName',
          title: 'Company Name',
          isRequired: true,
          placeholder: 'eg. Company name',
        },
      ],
    },
    {
      name: 'page9',
      elements: [
        {
          name: 'TelephoneNumber',
          title: 'Telephone Number',
          type: 'phone',
          isRequired: true,
        },
      ],
    },
  ],
  triggers: [
    {
      type: 'complete',
    },
  ],
  calculatedValues: [
    {
      name: 'var1',
    },
  ],
  sendResultOnPageNext: true,
  showPageNumbers: true,
  clearInvisibleValues: 'onHiddenContainer',
  widthMode: 'responsive',
};
