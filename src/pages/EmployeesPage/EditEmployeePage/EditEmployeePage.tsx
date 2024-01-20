import { Button, Container, Flex, Paper, Skeleton, Tabs, ThemeIcon } from '@mantine/core'
import {
  IconBriefcase,
  IconBuilding,
  IconCheck,
  IconCurrencyDollar,
  IconFiles,
  IconShieldCheck,
  IconStethoscope,
  IconUser,
} from '@tabler/icons-react'
import { useLoaderData, useNavigate } from 'react-router-dom'

import { useEditEmployeeMutation } from '../../../api'
import { EmployeeType } from '../../../api/types'

import { PageHeader } from './../../../components/PageHeader/PageHeader'
import {
  Attachments,
  HrInformation,
  MedicalInsurance,
  PersonalInformation,
  SalaryInformation,
  SocialInsurance,
  WorkInformation,
} from './components'
import { EditEmployeeFormProvider, useEditEmployeeForm } from './EditEmployeeFormContext'

export const EditEmployeePage = () => {
  const navigate = useNavigate()
  const [editEmployee, { isLoading }] = useEditEmployeeMutation()

  const { data } = useLoaderData() as { data: EmployeeType }

  const {
    addresses,
    attachments,
    bankAccounts,
    department,
    displayName,
    emergencyContacts,
    endDate,
    fullName,
    hrCode,
    id,
    jobTitle,
    medicalInsurance,
    nationalId,
    passport,
    personalEmail,
    phoneNumbers,
    salary,
    socialInsurance,
    staffId,
    startDate,
    status,
    username,
    workEmail,
    password,
    workLocation,
  } = data

  const form = useEditEmployeeForm({
    initialValues: {
      id,
      addresses,
      attachments,
      bankAccounts,
      department: department.id,
      displayName,
      emergencyContacts,
      endDate,
      fullName,
      hrCode,
      jobTitle: jobTitle.id,
      medicalInsurance,
      nationalId,
      passport,
      personalEmail,
      phoneNumbers,
      salary,
      socialInsurance: {
        ...socialInsurance,
        office: socialInsurance.office.id,
      },
      staffId,
      startDate,
      status,
      username,
      workEmail,
      password,
      workLocation: workLocation.id,
    },
  })

  const onFormSubmit = async () => {
    const formValidation = form.validate()
    if (formValidation.hasErrors) {
      return
    }

    await editEmployee(form.values).unwrap()
    navigate(-1)
  }

  return (
    <Container fluid p={0}>
      <EditEmployeeFormProvider form={form}>
        <PageHeader
          showBackButton
          title={
            data ? (
              `Edit ${data.fullName.en} - ${data.fullName.ar}`
            ) : (
              <Flex align="center" gap="md">
                Edit
                <Skeleton height={26} width={300} />
              </Flex>
            )
          }
          subtitle="Manage empolyee record"
          actionButton={
            <Button
              disabled={isLoading}
              loading={isLoading}
              variant="light"
              leftIcon={<IconCheck />}
              onClick={() => void onFormSubmit()}
            >
              Update
            </Button>
          }
        />
        <Tabs orientation="vertical" defaultValue="personalInfo" variant="pills" sx={{ gap: '16px' }} p="md">
          <Tabs.List>
            <Paper shadow="md" radius="md" withBorder sx={{ position: 'sticky', top: 151 }}>
              <Tabs.Tab
                w="100%"
                value="personalInfo"
                icon={
                  <ThemeIcon variant="light" size="md">
                    <IconUser size="1.2rem" stroke="1.5" />
                  </ThemeIcon>
                }
              >
                Personal Information
              </Tabs.Tab>
              <Tabs.Tab
                value="workInfo"
                w="100%"
                icon={
                  <ThemeIcon variant="light" size="md">
                    <IconBriefcase size="1.2rem" stroke="1.5" />
                  </ThemeIcon>
                }
              >
                Work Information
              </Tabs.Tab>

              <Tabs.Tab
                value="hrInfo"
                w="100%"
                icon={
                  <ThemeIcon variant="light" size="md">
                    <IconBuilding size="1.2rem" stroke="1.5" />
                  </ThemeIcon>
                }
              >
                HR Information
              </Tabs.Tab>
              <Tabs.Tab
                value="salaryInfo"
                w="100%"
                icon={
                  <ThemeIcon variant="light" size="md">
                    <IconCurrencyDollar size="1.2rem" stroke="1.5" />
                  </ThemeIcon>
                }
              >
                Salary Information
              </Tabs.Tab>
              <Tabs.Tab
                value="socialInsurance"
                w="100%"
                icon={
                  <ThemeIcon variant="light" size="md">
                    <IconShieldCheck size="1.2rem" stroke="1.5" />
                  </ThemeIcon>
                }
              >
                Social Insurance
              </Tabs.Tab>
              <Tabs.Tab
                value="medicalInsurance"
                w="100%"
                icon={
                  <ThemeIcon variant="light" size="md">
                    <IconStethoscope size="1.2rem" stroke="1.5" />
                  </ThemeIcon>
                }
              >
                Medical Insurance
              </Tabs.Tab>
              <Tabs.Tab
                value="documents"
                w="100%"
                icon={
                  <ThemeIcon variant="light" size="md">
                    <IconFiles size="1.2rem" stroke="1.5" />
                  </ThemeIcon>
                }
              >
                Documents
              </Tabs.Tab>
            </Paper>
          </Tabs.List>

          <Tabs.Panel value="personalInfo">
            <PersonalInformation />
          </Tabs.Panel>

          <Tabs.Panel value="workInfo" pl="xs">
            <WorkInformation />
          </Tabs.Panel>

          <Tabs.Panel value="hrInfo" pl="xs">
            <HrInformation />
          </Tabs.Panel>

          <Tabs.Panel value="salaryInfo" pl="xs">
            <SalaryInformation />
          </Tabs.Panel>

          <Tabs.Panel value="socialInsurance" pl="xs">
            <SocialInsurance />
          </Tabs.Panel>

          <Tabs.Panel value="medicalInsurance" pl="xs">
            <MedicalInsurance />
          </Tabs.Panel>

          <Tabs.Panel value="documents" pl="xs">
            <Attachments />
          </Tabs.Panel>
        </Tabs>
      </EditEmployeeFormProvider>
    </Container>
  )
}
