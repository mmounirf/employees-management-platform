import { Button, Container, Paper, Tabs, ThemeIcon } from '@mantine/core'
import { zodResolver } from '@mantine/form'
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
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useNavigate } from 'react-router-dom'

import { useAddEmployeeMutation } from '../../../api'
import { cleanFormValues } from '../../../utils/cleanFormValues'

import { PageHeader } from './../../../components/PageHeader/PageHeader'
import { AddNewEmployeeFormProvider, useAddNewEmployeeForm } from './AddNewEmployeeFormContext'
import {
  Attachments,
  HrInformation,
  MedicalInsurance,
  PersonalInformation,
  SalaryInformation,
  SocialInsurance,
  WorkInformation,
} from './components'
import { employeeFormInitialValues, employeeFormValidationSchema } from './constant'

export const AddNewEmployeePage = () => {
  const navigate = useNavigate()
  const [createEmployee, { isLoading }] = useAddEmployeeMutation()
  dayjs.extend(customParseFormat)

  const addNewEmployeeForm = useAddNewEmployeeForm({
    initialValues: employeeFormInitialValues,
    validate: zodResolver(employeeFormValidationSchema),
  })
  const { values, validate, isValid } = addNewEmployeeForm

  const onFormSubmit = async () => {
    validate()
    if (!isValid()) {
      return
    }
    await createEmployee(cleanFormValues(values)).unwrap()
    navigate(-1)
  }

  return (
    <Container fluid p={0}>
      <AddNewEmployeeFormProvider form={addNewEmployeeForm}>
        <PageHeader
          showBackButton
          title="New employee"
          subtitle="Create new employee record"
          actionButton={
            <Button
              disabled={isLoading}
              loading={isLoading}
              variant="light"
              leftIcon={<IconCheck />}
              onClick={() => void onFormSubmit()}
            >
              Save
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

          <Tabs.Panel value="medicalInsurance" pl="xs">
            <MedicalInsurance />
          </Tabs.Panel>

          <Tabs.Panel value="socialInsurance" pl="xs">
            <SocialInsurance />
          </Tabs.Panel>
          <Tabs.Panel value="documents" pl="xs">
            <Attachments />
          </Tabs.Panel>
        </Tabs>
      </AddNewEmployeeFormProvider>
    </Container>
  )
}
