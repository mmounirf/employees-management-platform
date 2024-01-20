export type TranslatedValue = {
  en: string
  ar: string
}

export type DocumentType = {
  url: string
  type: 'original' | 'scanned'
  status: {
    status: string
    date: string
    duration: {
      from: string
      to: string
    }
  }
}

export type DependentType = {
  fullName: string
  medicalCost: number
  cardIdNumber: string
  certificationNumber: string
  dob: string
  startDate: string
  issueDate: string
  endDate: string
  activationDate: string
  deleteDate: string
  gender: 'male' | 'female'
  picture: string
  reIssueDate: string
  relationShip: string
  relationDocument: string
  birthCert: string
}

export type BankAccountType = {
  name: string
  accountNumber: string
  atmNumber: string
}

export type AddressType = {
  label: string
  address1: string
  address2: string
  city: string
  state: string
}

export type EmergencyContactType = {
  name: string
  relation: string
  phoneNumber: string
}

export type EmployeePayload = {
  /* Personal Info */
  displayName: string
  username: string
  fullName: TranslatedValue
  personalEmail: string
  phoneNumbers: Array<string>
  addresses: Array<AddressType>
  nationalId: {
    id: string
    frontDocument: string
    backDocument: string
    expiryDate: string
  }
  passport: {
    id: string
    frontDocument: string
    expiryDate: string
  }
  emergencyContacts: Array<EmergencyContactType>
  /* ============ */

  /* Work Info */
  department: string
  jobTitle: string
  workLocation: string
  /* ============ */

  /* HR Info */
  status: string
  hrCode: string
  staffId: string
  workEmail: string
  password: string
  startDate: string
  endDate: string
  /* ============ */

  /* Salary Info */
  salary: {
    grossSalary: number
    netSalary: number
  }
  bankAccounts: Array<BankAccountType>
  /* ============ */

  /* Social Insurance Info */
  socialInsurance: {
    office: string
    emp: number
    com: number
    total: number
    emrFunds: number
    grandTotal: number
    startDate: string
    endDate: string
    submitFormDate: string
    insuranceSalary: number
    totalInsuranceSalary: number
    bIns: number
  }
  /* ============ */

  /* Medical Insurance Info */
  medicalInsurance: {
    fullName: string
    gender: 'male' | 'female'
    picture: string
    medicalCost: number
    cardIdNumber: string
    certificationNumber: string
    dob: string
    startDate: string
    issueDate: string
    endDate: string
    activationDate: string
    deleteDate: string
    reIssueDate: string
    dependents: Array<DependentType>
  }
  /* ============ */

  /* Contract */
  contract: {
    startDate: string
    endDate: string
    hiringDate: string
    resignDate: string
    lastWorkingDate: string
  }
  documentDeliveryDate: string
  /* ============ */

  /* Attachments */
  attachments: {
    militaryCert: {
      url: string
    }
    birthCert: {
      url: string
    }
    academicDegreeCert: {
      url: string
    }
    criminalRecord: {
      url: string
    }
    workCert: {
      url: string
    }
    personalPhoto: {
      url: string
    }
    workContract: {
      url: string
    }
    form1: {
      url: string
    }
    insuranceStatement: {
      url: string
    }
    form111: {
      url: string
    }
    custody: {
      url: string
    }
    nda: {
      url: string
    }
  }
}

export type EmployeeType = {
  id: string
  /* Personal Info */
  displayName: string
  username: string
  fullName: TranslatedValue
  personalEmail: string
  phoneNumbers: Array<string>
  addresses: Array<AddressType>
  nationalId: {
    id: string
    frontDocument: string
    backDocument: string
    expiryDate: string
  }
  passport: {
    id: string
    frontDocument: string
    expiryDate: string
  }
  emergencyContacts: Array<EmergencyContactType>
  /* ============ */

  /* Work Info */
  department: {
    id: string
    name: TranslatedValue
  }
  jobTitle: {
    id: string
    ar: string
    en: string
  }
  workLocation: {
    id: string
    name: TranslatedValue
    address: {
      address1: string
      address2: string
      city: string
      state: string
    }
  }
  /* ============ */

  /* HR Info */
  status: string
  hrCode: string
  staffId: string
  workEmail: string
  password: string
  startDate: string
  endDate: string
  /* ============ */

  /* Salary Info */
  salary: {
    grossSalary: number
    netSalary: number
  }
  bankAccounts: Array<BankAccountType>
  /* ============ */

  /* Social Insurance Info */
  socialInsurance: {
    office: {
      id: string
      name: TranslatedValue
      address: {
        address1: string
        address2: string
        city: string
        state: string
      }
    }
    emp: number
    com: number
    total: number
    emrFunds: number
    grandTotal: number
    startDate: string
    endDate: string
    submitFormDate: string
    insuranceSalary: number
    totalInsuranceSalary: number
    bIns: number
  }
  /* ============ */

  /* Medical Insurance Info */
  medicalInsurance: {
    fullName: string
    gender: 'male' | 'female'
    picture: string
    medicalCost: number
    cardIdNumber: string
    certificationNumber: string
    dob: string
    startDate: string
    issueDate: string
    endDate: string
    activationDate: string
    deleteDate: string
    reIssueDate: string
    dependents: Array<DependentType>
  }
  /* ============ */

  /* Contract */
  contract: {
    startDate: string
    endDate: string
    hiringDate: string
    resignDate: string
    lastWorkingDate: string
  }
  documentDeliveryDate: string
  /* ============ */

  /* Attachments */
  attachments: {
    militaryCert: {
      url: string
    }
    birthCert: {
      url: string
    }
    academicDegreeCert: {
      url: string
    }
    criminalRecord: {
      url: string
    }
    workCert: {
      url: string
    }
    personalPhoto: {
      url: string
    }
    workContract: {
      url: string
    }
    form1: {
      url: string
    }
    insuranceStatement: {
      url: string
    }
    form111: {
      url: string
    }
    custody: {
      url: string
    }
    nda: {
      url: string
    }
  }
}

export type DataResponse<T> = {
  success: true
  data: T
  message: string
}

export type QueryParams = {
  limit: number
  s: string
  sort: string
  fields: string
  page: number
}

export type PaginatedResponse<T> = {
  count: number
  page: number
  pageCount: number
  total: number
  data: T
}
