import { Button, Container, Flex, Loader, Modal, Select, SimpleGrid, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { useState } from 'react'

import { useAddBranchMutation, useGetBranchesQuery } from '../../../api'
import { isValidationError } from '../../../api/utils'

type BranchFieldProps = {
  onChange: (value: string) => void
  value?: string
}

export const BranchField = ({ onChange, value }: BranchFieldProps) => {
  const form = useForm({
    initialValues: {
      name: {
        en: '',
        ar: '',
      },
      address: {
        address1: '',
        address2: '',
        city: '',
        state: '',
      },
    },
  })
  const [modalOpened, setModalOpened] = useState(false)
  const [createModal, { isLoading }] = useAddBranchMutation()
  const { data: response, isFetching } = useGetBranchesQuery(undefined)
  const data = response?.data.data.map(({ id, name }) => ({ value: id, label: `${name.en} - ${name.ar}` })) ?? []

  const onCreateBranch = (query: string) => {
    form.setFieldValue('name', { en: query, ar: query })
    setModalOpened(true)
    return null
  }
  const onBranchSave = async () => {
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
        message: `Branch ${form.values.name.en} - ${form.values.name.ar} added successfully`,
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
      <Modal opened={modalOpened} onClose={onModalClose} title="Create new branch" size="xl">
        <Container>
          <SimpleGrid cols={2}>
            <TextInput
              withAsterisk
              label="English Name"
              placeholder="Branch name in english"
              {...form.getInputProps('name.en')}
            />{' '}
            <TextInput
              withAsterisk
              label="Arabic Name"
              placeholder="Branch name in arabic"
              {...form.getInputProps('name.ar')}
            />
            <TextInput
              withAsterisk
              label="Address 1"
              placeholder="Address 1"
              {...form.getInputProps('address.address1')}
            />
            <TextInput
              withAsterisk
              label="Address 2"
              placeholder="Address 2"
              {...form.getInputProps('address.address2')}
            />
            <TextInput withAsterisk label="City" placeholder="City" {...form.getInputProps('address.city')} />
            <TextInput withAsterisk label="State" placeholder="State" {...form.getInputProps('address.state')} />
          </SimpleGrid>
          <Button mt="lg" fullWidth loading={isLoading} onClick={() => void onBranchSave()} leftIcon={<IconCheck />}>
            Save
          </Button>
        </Container>
      </Modal>
      <Select
        onChange={onChange}
        value={value}
        required
        sx={{ flexGrow: 1 }}
        label="Branch"
        placeholder="Select or create branch"
        nothingFound="No branches found"
        data={data}
        disabled={isFetching}
        rightSection={isFetching && <Loader size="sm" variant="dots" />}
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={onCreateBranch}
        searchable
        withinPortal
        creatable
      />
    </Flex>
  )
}
