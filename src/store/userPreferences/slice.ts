import { createSlice } from '@reduxjs/toolkit';

type PreferenceState = {
  voice: string;
};

const initialState: PreferenceState = {
  voice: 'Default',
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setVoicePreference(state, action) {
      state.voice = action.payload;
    },
  },
});

export const { setVoicePreference } = preferencesSlice.actions;
export default preferencesSlice.reducer;
