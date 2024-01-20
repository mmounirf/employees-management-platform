import { Button, Container, Flex, Loader, Modal, Select, SimpleGrid, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { useState } from 'react'

import { useAddJobTitleMutation, useGetJobTitlesQuery } from '../../../api'
import { isValidationError } from '../../../api/utils'

type JobTitleFieldProps = {
  onChange: (value: string) => void
  value?: string
}

export const JobTitleField = ({ onChange, value }: JobTitleFieldProps) => {
  const form = useForm({
    initialValues: {
      en: '',
      ar: '',
    },
  })
  const [modalOpened, setModalOpened] = useState(false)
  const [createJobTitle, { isLoading }] = useAddJobTitleMutation()
  const { data: response, isFetching } = useGetJobTitlesQuery()
  const data = response?.data.map(({ id, ar, en }) => ({ value: id, label: `${en} - ${ar}` })) ?? []

  const onCreateJobTitle = (query: string) => {
    form.setFieldValue('en', query)
    form.setFieldValue('ar', query)
    setModalOpened(true)
    return null
  }
  const onJobTitleSave = async () => {
    const response = await createJobTitle(form.values)

    if ('error' in response) {
      if ('data' in response.error && isValidationError(response.error?.data)) {
        response.error.data.validations.forEach((error) =>
          form.setFieldError(`${error.fieldName}`, error.constraints[0]),
        )
        return
      }
    } else {
      showNotification({
        message: `Job title ${form.values.en} - ${form.values.ar} added successfully`,
        icon: <IconCheck />,
        color: 'green',
      })
      onModalClose()
      onChange(response.data.data.id)
    }
  }

  const onModalClose = () => {
    setModalOpened(false)
    form.reset()
    form.clearErrors()
  }

  return (
    <Flex direction="row" gap="md">
      <Modal opened={modalOpened} onClose={onModalClose} title="Create new job title" size="xl">
        <Container>
          <SimpleGrid cols={2}>
            <TextInput
              withAsterisk
              label="English Job Title"
              placeholder="Job title in english"
              {...form.getInputProps('en')}
            />
            <TextInput
              withAsterisk
              label="Arabic Job Title"
              placeholder="Job title in arabic"
              {...form.getInputProps('ar')}
            />
          </SimpleGrid>
          <Button mt="lg" fullWidth loading={isLoading} onClick={() => void onJobTitleSave()} leftIcon={<IconCheck />}>
            Save
          </Button>
        </Container>
      </Modal>
      <Select
        onChange={onChange}
        value={value}
        required
        sx={{ flexGrow: 1 }}
        label="Job title"
        placeholder="Select or create job title"
        nothingFound="No job title found"
        data={data}
        disabled={isFetching}
        rightSection={isFetching && <Loader size="sm" variant="dots" />}
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={onCreateJobTitle}
        searchable
        withinPortal
        creatable
      />
    </Flex>
  )
}
