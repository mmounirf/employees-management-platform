import { Button, Container, SimpleGrid, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { closeAllModals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { z } from 'zod'

import { useEditInsuranceOfficeMutation, type EditInsuranceOfficePayload } from '../../../api'

const schema = z.object({
  name: z.object({
    en: z.string().min(1, `Branch name in enlgish is required`),
    ar: z.string().min(1, `Branch name in arabic is required`),
  }),
})

type EditBranchModalProps = {
  data: EditInsuranceOfficePayload
}

export const EditInsuranceOfficeModal = ({ data }: EditBranchModalProps) => {
  const [editInsuranceOffice, { isLoading }] = useEditInsuranceOfficeMutation()
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: data,
  })

  const onSave = async () => {
    const formValidation = form.validate()
    if (formValidation.hasErrors) {
      return
    }

    const response = await editInsuranceOffice(form.values).unwrap()

    if (response) {
      showNotification({
        message: `Insurance office ${form.values.name.en} has been updated`,
        icon: <IconCheck />,
        color: 'green',
      })
      closeAllModals()
    }
  }

  const { name, address } = form.values
  const { en, ar } = name
  const { state, city, address1, address2 } = address

  return (
    <Container>
      <SimpleGrid cols={2}>
        <TextInput
          withAsterisk
          label="English Name"
          placeholder="Insurance office name in english"
          value={en}
          onChange={(e) => form.setValues({ ...form.values, name: { ...name, en: e.target.value } })}
        />
        <TextInput
          withAsterisk
          label="Arabic Name"
          placeholder="Insurance office name in arabic"
          value={ar}
          onChange={(e) => form.setValues({ ...form.values, name: { ...name, ar: e.target.value } })}
        />
        <TextInput
          withAsterisk
          label="Address 1"
          placeholder="Address 1"
          value={address1}
          onChange={(e) => form.setValues({ ...form.values, address: { ...address, address1: e.target.value } })}
        />
        <TextInput
          withAsterisk
          label="Address 2"
          placeholder="Address 2"
          value={address2}
          onChange={(e) => form.setValues({ ...form.values, address: { ...address, address2: e.target.value } })}
        />
        <TextInput
          withAsterisk
          label="City"
          placeholder="City"
          value={city}
          onChange={(e) => form.setValues({ ...form.values, address: { ...address, city: e.target.value } })}
        />
        <TextInput
          withAsterisk
          label="State"
          placeholder="State"
          value={state}
          onChange={(e) => form.setValues({ ...form.values, address: { ...address, state: e.target.value } })}
        />
      </SimpleGrid>
      <Button mt="lg" fullWidth loading={isLoading} onClick={() => void onSave()} leftIcon={<IconCheck />}>
        Update
      </Button>
    </Container>
  )
}
