import { z } from 'zod'

import { EmployeePayload } from '../../../api/types'

export const employeeFormValidationSchema = z.object({})

export const employeeFormInitialValues: EmployeePayload = {
  displayName: '',
  username: '',
  fullName: { ar: '', en: '' },
  personalEmail: '',
  phoneNumbers: [],
  addresses: [],
  nationalId: {
    id: '',
    frontDocument: '',
    backDocument: '',
    expiryDate: '',
  },
  passport: {
    id: '',
    frontDocument: '',
    expiryDate: '',
  },
  emergencyContacts: [],
  department: '',
  jobTitle: '',
  workLocation: '',
  status: '',
  hrCode: '',
  staffId: '',
  workEmail: '',
  password: '',
  startDate: '',
  endDate: '',
  salary: {
    grossSalary: 0,
    netSalary: 0,
  },
  bankAccounts: [],
  socialInsurance: {
    office: '',
    emp: 0,
    com: 0,
    total: 0,
    emrFunds: 0,
    grandTotal: 0,
    startDate: '',
    endDate: '',
    submitFormDate: '',
    insuranceSalary: 0,
    totalInsuranceSalary: 0,
    bIns: 0,
  },
  medicalInsurance: {
    fullName: '',
    medicalCost: 0,
    cardIdNumber: '',
    certificationNumber: '',
    dob: '',
    startDate: '',
    issueDate: '',
    endDate: '',
    activationDate: '',
    deleteDate: '',
    reIssueDate: '',
    dependents: [],
  },
  attachments: {
    militaryCert: {
      url: '',
    },
    birthCert: {
      url: '',
    },
    academicDegreeCert: {
      url: '',
    },
    criminalRecord: {
      url: '',
    },
    workCert: {
      url: '',
    },
    personalPhoto: {
      url: '',
    },
    workContract: {
      url: '',
    },
    form1: {
      url: '',
    },
    insuranceStatement: {
      url: '',
    },
    form111: {
      url: '',
    },
    custody: {
      url: '',
    },
    nda: {
      url: '',
    },
  },
}
