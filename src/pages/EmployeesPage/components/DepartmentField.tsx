import { Button, Container, Flex, Loader, Modal, Select, SimpleGrid, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { ReactNode, useState } from 'react'

import { useAddDepartmentMutation, useGetDepartmentsQuery } from '../../../api'
import { isValidationError } from '../../../api/utils'

type DepartmentFieldProps = {
  onChange: (value: string) => void
  value?: string
  error?: ReactNode
}

export const DepartmentField = ({ onChange, value, error }: DepartmentFieldProps) => {
  const form = useForm({
    initialValues: {
      name: {
        en: '',
        ar: '',
      },
    },
  })
  const [modalOpened, setModalOpened] = useState(false)
  const [createModal, { isLoading }] = useAddDepartmentMutation()
  const { data: response, isFetching } = useGetDepartmentsQuery(undefined)
  const data = response?.data.data.map(({ id, name }) => ({ value: id, label: `${name.en} - ${name.ar}` })) ?? []

  const onCreateDepartment = (query: string) => {
    form.setFieldValue('name', { en: query, ar: query })
    setModalOpened(true)
    return null
  }
  const onDepartmentSave = async () => {
    const response = await createModal(form.values)
    if ('error' in response) {
      if ('data' in response.error && isValidationError(response.error?.data)) {
        response.error.data.validations.forEach((error) =>
          form.setFieldError(`name.${error.fieldName}`, error.constraints[0]),
        )
        return
      }
    } else {
      showNotification({
        message: `Department ${form.values.name.en} - ${form.values.name.ar} added successfully`,
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
      <Modal opened={modalOpened} onClose={onModalClose} title="Create new department" size="xl">
        <Container>
          <SimpleGrid cols={2}>
            <TextInput
              withAsterisk
              label="English Name"
              placeholder="Depratment name in english"
              {...form.getInputProps('name.en')}
            />
            <TextInput
              withAsterisk
              label="Arabic Name"
              placeholder="Depratment name in arabic"
              {...form.getInputProps('name.ar')}
            />
          </SimpleGrid>
          <Button
            mt="lg"
            fullWidth
            loading={isLoading}
            onClick={() => void onDepartmentSave()}
            leftIcon={<IconCheck />}
          >
            Save
          </Button>
        </Container>
      </Modal>
      <Select
        onChange={onChange}
        value={value}
        required
        sx={{ flexGrow: 1 }}
        label="Department"
        placeholder="Select or create department"
        nothingFound="No departments found"
        data={data}
        disabled={isFetching}
        rightSection={isFetching && <Loader size="sm" variant="dots" />}
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={onCreateDepartment}
        searchable
        withinPortal
        creatable
        error={error}
      />
    </Flex>
  )
}
