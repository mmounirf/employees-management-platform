import { Button, Container, SimpleGrid, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { closeAllModals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { z } from 'zod'

import { useAddDepartmentMutation } from '../../../api'

const schema = z.object({
  name: z.object({
    en: z.string().min(1, `Department name in enlgish is required`),
    ar: z.string().min(1, `Department name in arabic is required`),
  }),
})

export const AddDepartmentModal = () => {
  const [addDepartment, { isLoading }] = useAddDepartmentMutation()
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: {
        en: '',
        ar: '',
      },
    },
  })

  const onSave = async () => {
    const formValidation = form.validate()
    if (formValidation.hasErrors) {
      return
    }

    const response = await addDepartment(form.values).unwrap()

    if (response) {
      showNotification({
        message: `Department ${form.values.name.en} added successfully`,
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
          placeholder="Depratment name in english"
          {...form.getInputProps('name.en')}
        />{' '}
        <TextInput
          withAsterisk
          label="Arabic Name"
          placeholder="Depratment name in arabic"
          {...form.getInputProps('name.ar')}
        />
      </SimpleGrid>
      <Button mt="lg" fullWidth loading={isLoading} onClick={() => void onSave()} leftIcon={<IconCheck />}>
        Save
      </Button>
    </Container>
  )
}
