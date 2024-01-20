import { Button, Container, SimpleGrid, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { closeAllModals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { z } from 'zod'

import { EditDepartmentPayload, useEditDepartmentMutation } from '../../../api'

const schema = z.object({
  name: z.object({
    en: z.string().min(1, `Department name in enlgish is required`),
    ar: z.string().min(1, `Department name in arabic is required`),
  }),
})

type EditDepartmentModalProps = {
  data: EditDepartmentPayload
}

export const EditDepartmentModal = ({ data }: EditDepartmentModalProps) => {
  const [editDepartment, { isLoading }] = useEditDepartmentMutation()
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: data,
  })

  const onSave = async () => {
    const formValidation = form.validate()
    if (formValidation.hasErrors) {
      return
    }

    const response = await editDepartment(form.values).unwrap()

    if (response) {
      showNotification({
        message: `Department ${form.values.name.en} has been updated`,
        icon: <IconCheck />,
        color: 'green',
      })
      closeAllModals()
    }
  }

  const { values, setValues } = form

  return (
    <Container>
      <SimpleGrid cols={2}>
        <TextInput
          withAsterisk
          label="English Name"
          placeholder="Depratment name in english"
          value={values.name.en}
          onChange={(e) => setValues({ ...values, name: { ...values.name, en: e.target.value } })}
        />{' '}
        <TextInput
          withAsterisk
          label="Arabic Name"
          placeholder="Depratment name in arabic"
          value={values.name.ar}
          onChange={(e) => setValues({ ...values, name: { ...values.name, ar: e.target.value } })}
        />
      </SimpleGrid>
      <Button mt="lg" fullWidth loading={isLoading} onClick={() => void onSave()} leftIcon={<IconCheck />}>
        Update
      </Button>
    </Container>
  )
}
