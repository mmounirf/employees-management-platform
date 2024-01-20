import { Button, Container, Paper, Skeleton, Tabs, ThemeIcon } from '@mantine/core'
import {
  IconBriefcase,
  IconBuilding,
  IconCurrencyDollar,
  IconFiles,
  IconPencil,
  IconShieldCheck,
  IconStethoscope,
  IconUser,
} from '@tabler/icons-react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetEmployeeQuery } from '../../../api'
import { PageHeader } from '../../../components'

import { PersonalInformation } from './components'
import { Documents } from './components/Documents'
import { HrInformation } from './components/HrInformation'
import { MedicalInsurance } from './components/MedicalInsurance'
import { SalaryInformation } from './components/SalaryInformation'
import { SocialInsurance } from './components/SocialInsurance'
import { WorkInformation } from './components/WorkInformation'

export const ViewEmployeeDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isFetching } = useGetEmployeeQuery({ id: id ?? '' })

  return (
    <Container fluid p={0}>
      <PageHeader
        actionButton={
          id && (
            <Button variant="light" leftIcon={<IconPencil />} onClick={() => navigate(`/employees/${id}/edit`)}>
              Edit
            </Button>
          )
        }
        title={
          isFetching ? (
            <Skeleton width={250} height={26} />
          ) : (
            `${data?.data.fullName.en ?? ''} - ${data?.data.fullName.ar ?? ''}`
          )
        }
        subtitle="View employee record"
        showBackButton
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
          <PersonalInformation data={data?.data} />
        </Tabs.Panel>

        <Tabs.Panel value="workInfo" pl="xs">
          <WorkInformation data={data?.data} />
        </Tabs.Panel>

        <Tabs.Panel value="hrInfo" pl="xs">
          <HrInformation data={data?.data} />
        </Tabs.Panel>

        <Tabs.Panel value="salaryInfo" pl="xs">
          <SalaryInformation data={data?.data} />
        </Tabs.Panel>

        <Tabs.Panel value="socialInsurance" pl="xs">
          <SocialInsurance data={data?.data} />
        </Tabs.Panel>
        <Tabs.Panel value="medicalInsurance" pl="xs">
          <MedicalInsurance data={data?.data} />
        </Tabs.Panel>

        <Tabs.Panel value="documents" pl="xs">
          <Documents data={data?.data} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}
