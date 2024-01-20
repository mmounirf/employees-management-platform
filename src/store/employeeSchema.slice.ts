import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type EmployeeSchemaState = {
  readSections: Array<string>
  writeSections: Array<string>
}

export const initialEmployeeState: EmployeeSchemaState = {
  readSections: [],
  writeSections: [],
}

export const employeeSchemaSlice = createSlice({
  name: 'employee-schema',
  initialState: initialEmployeeState,
  reducers: {
    setSections(state: EmployeeSchemaState, action: PayloadAction<Partial<EmployeeSchemaState>>) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { setSections } = employeeSchemaSlice.actions

export default employeeSchemaSlice.reducer
