import { Card, SimpleGrid, Stack } from '@mantine/core'
import { memo } from 'react'

import { FileField } from '../../components/FileField'
import { useAddNewEmployeeFormContext } from '../AddNewEmployeeFormContext'

export const Attachments = memo(() => {
  const addNewEmployeeForm = useAddNewEmployeeFormContext()
  const { setFieldValue } = addNewEmployeeForm

  return (
    <Stack>
      <Card withBorder radius="md" p="md">
        <SimpleGrid cols={4}>
          <FileField
            label="Military Certificate"
            onChange={(fileName) => setFieldValue('attachments.militaryCert.url', fileName)}
          />
          <FileField
            label="Birth Certificate"
            onChange={(fileName) => setFieldValue('attachments.birthCert.url', fileName)}
          />
          <FileField
            label="Academic Degree Certificate"
            onChange={(fileName) => setFieldValue('attachments.academicDegreeCert.url', fileName)}
          />
          <FileField
            label="Criminal Record"
            onChange={(fileName) => setFieldValue('attachments.criminalRecord.url', fileName)}
          />
          <FileField
            label="Work Certificate"
            onChange={(fileName) => setFieldValue('attachments.workCert.url', fileName)}
          />

          <FileField
            accept="image/png,image/jpeg"
            label="Personal Photo"
            onChange={(fileName) => setFieldValue('attachments.personalPhoto.url', fileName)}
          />
          <FileField
            label="Work Contract"
            onChange={(fileName) => setFieldValue('attachments.workContract.url', fileName)}
          />
          <FileField label="Form 1" onChange={(fileName) => setFieldValue('attachments.form1.url', fileName)} />
          <FileField
            label="Insurance Statement"
            onChange={(fileName) => setFieldValue('attachments.insuranceStatement.url', fileName)}
          />
          <FileField label="Form 111" onChange={(fileName) => setFieldValue('attachments.form111.url', fileName)} />
          <FileField label="Custody" onChange={(fileName) => setFieldValue('attachments.custody.url', fileName)} />
          <FileField label="NDA" onChange={(fileName) => setFieldValue('attachments.nda.url', fileName)} />
        </SimpleGrid>
      </Card>
    </Stack>
  )
})
