import { Button, Container, SimpleGrid, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { closeAllModals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { z } from 'zod'

import { useAddBranchMutation } from '../../../api'

const schema = z.object({
  name: z.object({
    en: z.string().min(1, `Branch name in enlgish is required`),
    ar: z.string().min(1, `Branch name in arabic is required`),
  }),
})

export const AddBranchModal = () => {
  const [addBranch, { isLoading }] = useAddBranchMutation()
  const form = useForm({
    validate: zodResolver(schema),
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

  const onSave = async () => {
    const formValidation = form.validate()
    if (formValidation.hasErrors) {
      return
    }

    const response = await addBranch(form.values).unwrap()

    if (response) {
      showNotification({
        message: `Branch ${form.values.name.en} added successfully`,
        icon: <IconCheck />,
        color: 'green',
      })
      closeAllModals()
    }
  }

  return (
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
        <TextInput withAsterisk label="Address 1" placeholder="Address 1" {...form.getInputProps('address.address1')} />
        <TextInput withAsterisk label="Address 2" placeholder="Address 2" {...form.getInputProps('address.address2')} />
        <TextInput withAsterisk label="City" placeholder="City" {...form.getInputProps('address.city')} />
        <TextInput withAsterisk label="State" placeholder="State" {...form.getInputProps('address.state')} />
      </SimpleGrid>
      <Button mt="lg" fullWidth loading={isLoading} onClick={() => void onSave()} leftIcon={<IconCheck />}>
        Save
      </Button>
    </Container>
  )
}
