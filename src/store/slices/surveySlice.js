import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  surveyData: null,
  submittedData: {},
  loading: false,
  error: null,
  sectionVisibility: {
    showInformasiNasabah: true,
    showInformasiPekerjaanWira: true,
    showInformasiPekerjaanNonWira: true,
    showInformasiTempatTinggal: true,
    showInformasiOrder: true,
    showInformasiObjectPembiayaan: true,
    showInformasiSupplier: true,
    showInformasiPencairanLangsung: true,
    showEmergencyContact: true,
    showInformasiSurvey: true,
    showCancelApplication: true,
  },
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setSurveyData: (state, action) => {
      state.surveyData = action.payload;
    },
    setSubmittedData: (state, action) => {
      state.submittedData = { ...state.submittedData, ...action.payload };
    },
    setSectionVisibility: (state, action) => {
      state.sectionVisibility = { ...state.sectionVisibility, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetSurvey: (state) => {
      state.surveyData = null;
      state.submittedData = {};
      state.error = null;
    },
  },
});

export const {
  setSurveyData,
  setSubmittedData,
  setSectionVisibility,
  setLoading,
  setError,
  clearError,
  resetSurvey,
} = surveySlice.actions;

export default surveySlice.reducer;