// redux toolkit slice for single pack

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import axios from '~/config/axios';

import { api } from '../constants/api';

const singlePackAdapter = createEntityAdapter({
  selectId: (singlePack) => singlePack._id,
});

// Step 2: Create the initial state using the entity adapter
const initialState = singlePackAdapter.getInitialState({
  singlePack: {},
  isLoading: false,
  error: null,
});

export const fetchSinglePack = createAsyncThunk(
  'packs/fetchSinglePack',
  async (packId) => {
    const response = await axios.get(`${api}/pack/p/${packId}`);
    return response.data;
  },
);
export const selectItemsGlobal = createAsyncThunk(
  'Items/selectItemsGlobal',
  async (item) => {
    try {
      const itemId = item.selectedItem;
      const ownerId = item.ownerId;
      const packId = item.packId;

      const response = await axios.post(`${api}/item/global/select/${packId}`, {
        itemId,
        ownerId,
      });
      return response.data;
    } catch (error) {
      console.log('error', error.message);
    }
  },
);

const singlePackSlice = createSlice({
  name: 'singlePack',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePack.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSinglePack.fulfilled, (state, action) => {
        singlePackAdapter.setAll(state.singlePack, action.payload);
        state.singlePack = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSinglePack.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(selectItemsGlobal.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(selectItemsGlobal.fulfilled, (state, action) => {
        state.singlePack.items.push(action.payload.data);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(selectItemsGlobal.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectById: selectSinglePackById,
  selectAll: selectAllSinglePacks,
} = singlePackAdapter.getSelectors((state) => state.singlePack);

export default singlePackSlice.reducer;
