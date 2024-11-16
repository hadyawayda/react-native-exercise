// create company ID slice
import {createSlice} from '@reduxjs/toolkit';

type CompanyDataState = {
  companyID: string;
};

const initialState: CompanyDataState = {
  companyID: '',
};

const companyDataSlice = createSlice({
  name: 'companyData',
  initialState,
  reducers: {
    setCompanyID: (state, action) => {
      state.companyID = action.payload;
    },
  },
});

export const {setCompanyID} = companyDataSlice.actions;
export default companyDataSlice.reducer;
