import { Card, SimpleGrid, Stack } from '@mantine/core'
import { memo } from 'react'

import { FileField } from '../../components/FileField'
import { useEditEmployeeFormContext } from '../EditEmployeeFormContext'

export const Attachments = memo(() => {
  const editEmployeeForm = useEditEmployeeFormContext()
  const { setFieldValue, values } = editEmployeeForm
  const { attachments } = values

  return (
    <Stack>
      <Card withBorder radius="md" p="md">
        <SimpleGrid cols={4}>
          <FileField
            file={attachments.militaryCert.url}
            label="Military Certificate"
            onChange={(fileName) => setFieldValue('attachments.militaryCert.url', fileName)}
          />
          <FileField
            file={attachments.birthCert.url}
            label="Birth Certificate"
            onChange={(fileName) => setFieldValue('attachments.birthCert.url', fileName)}
          />
          <FileField
            file={attachments.academicDegreeCert.url}
            label="Academic Degree Certificate"
            onChange={(fileName) => setFieldValue('attachments.academicDegreeCert.url', fileName)}
          />
          <FileField
            file={attachments.criminalRecord.url}
            label="Criminal Record"
            onChange={(fileName) => setFieldValue('attachments.criminalRecord.url', fileName)}
          />
          <FileField
            file={attachments.workCert.url}
            label="Work Certificate"
            onChange={(fileName) => setFieldValue('attachments.workCert.url', fileName)}
          />

          <FileField
            file={attachments.personalPhoto.url}
            accept="image/png,image/jpeg"
            label="Personal Photo"
            onChange={(fileName) => setFieldValue('attachments.personalPhoto.url', fileName)}
          />
          <FileField
            file={attachments.workContract.url}
            label="Work Contract"
            onChange={(fileName) => setFieldValue('attachments.workContract.url', fileName)}
          />
          <FileField
            file={attachments.form1.url}
            label="Form 1"
            onChange={(fileName) => setFieldValue('attachments.form1.url', fileName)}
          />
          <FileField
            file={attachments.insuranceStatement.url}
            label="Insurance Statement"
            onChange={(fileName) => setFieldValue('attachments.insuranceStatement.url', fileName)}
          />
          <FileField
            file={attachments.form111.url}
            label="Form 111"
            onChange={(fileName) => setFieldValue('attachments.form111.url', fileName)}
          />
          <FileField
            file={attachments.custody.url}
            label="Custody"
            onChange={(fileName) => setFieldValue('attachments.custody.url', fileName)}
          />
          <FileField
            file={attachments.nda.url}
            label="NDA"
            onChange={(fileName) => setFieldValue('attachments.nda.url', fileName)}
          />
        </SimpleGrid>
      </Card>
    </Stack>
  )
})
