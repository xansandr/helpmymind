import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  city: string;
  temperature: number | null;
  loading: boolean;
}

const initialState: WeatherState = {
  city: '',
  temperature: null,
  loading: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setTemperature: (state, action: PayloadAction<number>) => {
      state.temperature = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCity, setTemperature, setLoading } = weatherSlice.actions;
export default weatherSlice.reducer;
