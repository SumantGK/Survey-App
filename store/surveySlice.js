import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    surveys: [
      {
        name: 'Beans Survey',
        questions: [
          {
            question: 'How do you like farming?',
            helperText: '5 being most likely and 1 being least likely',
            mandatory: 'yes',
            type: 'multiple choice',
            options: [
              {
                optName: '5',
                optValue: '5',
              },
              {
                optName: '4',
                optValue: '4',
              },
              {
                optName: '3',
                optValue: '3',
              },
              {
                optName: '2',
                optValue: '2',
              },
              {
                optName: '1',
                optValue: '1',
              },
            ],
          },
          {
            question: 'How much quantity did you farm in last year?',
            helperText: 'Quantity in pounds',
            mandatory: 'no',
            type: 'number',
            options: [
              {
                optName: 'min',
                optValue: '15',
              },
              {
                optName: 'max',
                optValue: '25',
              },
            ],
          },
          {
            question: 'Are you a coffee lover?',
            helperText: '',
            mandatory: 'no',
            type: 'boolean',
            options: [
              {
                optName: 'Yes',
                optValue: 'yes',
              },
              {
                optName: 'No',
                optValue: 'no',
              },
            ],
          },
          {
            question: 'Write your experience..',
            helperText: 'Write minmum 10 words.',
            mandatory: 'yes',
            type: 'text',
            options: [
              {
                optName: 'experience',
                optValue: '',
              },
            ],
          },
        ],
      },
      {
        name: 'Soil test survey',
        questions: [
          {
            question: 'Did you test Soil recently?',
            helperText: 'Soil testing',
            mandatory: 'yes',
            type: 'boolean',
            options: [
              {
                optName: 'Yes',
                optValue: 'yes',
              },
              {
                optName: 'No',
                optValue: 'no',
              },
            ],
          },
          {
            question: 'How much quantity did you farm in last year?',
            helperText: 'Quantity in pounds',
            mandatory: 'no',
            type: 'number',
            options: [
              {
                optName: 'min',
                optValue: '10',
              },
              {
                optName: 'max',
                optValue: '100',
              },
            ],
          },
          {
            question: 'Are you a coffee lover?',
            helperText: '',
            mandatory: 'no',
            type: 'boolean',
            options: [
              {
                optName: 'Yes',
                optValue: 'yes',
              },
              {
                optName: 'No',
                optValue: 'no',
              },
            ],
          },
          {
            question: 'Write your experience..',
            helperText: 'Write minmum 10 words.',
            mandatory: 'yes',
            type: 'text',
            options: [
              {
                optName: 'experience',
                optValue: '',
              },
            ],
          },
        ],
      },
    ],
  },
};

export const surveySlice = createSlice({
  name: 'SurveySlice',
  initialState,
  reducers: {
    addSurvey: (state, action) => {
      // alert(JSON.stringify(action.payload.state));
      state.data.surveys = [...state.data.surveys, action.payload.state];
    },
    addQuestion: (state, action) => {
      const { index, data } = action.payload;
      state.data.surveys[index].questions.push(data);
    },
    addOptions: (state, action) => {
      const { surveyIndex, questionIndex, data } = action.payload;
      state.data.surveys[surveyIndex].questions[questionIndex].options.push(
        data,
      );
    },
    updateSurvey: (state, action) => {
      const { index, data } = action.payload;
      state.data.surveys[index][data.name] = data.value;
    },
    updateQuestion: (state, action) => {
      const { index, data } = action.payload;
      state.data.surveys[index].questions[data.index] = data.value;
      // alert(JSON.stringify(state));
    },
    sortOptions: (state, action) => {
      const { surveyIndex, questionIndex, data } = action.payload;
      const { surveys } = state.data;
      surveys[surveyIndex].questions[questionIndex] = data;
      state.data.surveys = [...surveys];
    },
  },
});

export const {
  addSurvey,
  addQuestion,
  updateSurvey,
  updateQuestion,
  sortOptions,
  addOptions,
} = surveySlice.actions;
export default surveySlice.reducer;
