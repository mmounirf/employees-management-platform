import { Flex, Loader, Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconPin, IconWorld } from '@tabler/icons-react'
import { forwardRef, useEffect } from 'react'
import { Twemoji } from 'react-emoji-render'

import { useGetCitiesMutation, useGetCountriesQuery } from '../../../api'
import { AddressType } from '../../../api/types'

type CountryProps = {
  label: string
  unicodeFlag: string
}

type AddressesFieldProps = {
  onChange: (address: AddressType) => void
  value?: AddressType
}

const defaultValue = {
  label: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
}

const CountryOption = forwardRef<HTMLDivElement, CountryProps>(({ label, unicodeFlag, ...rest }: CountryProps, ref) => (
  <Flex ref={ref} {...rest} align="center" gap="md">
    <Text size="xl">
      <Twemoji text={unicodeFlag} svg />
    </Text>
    <Text size="md">{label}</Text>
  </Flex>
))

export const AddressField = ({ onChange, value = defaultValue }: AddressesFieldProps) => {
  const form = useForm<AddressType>({
    initialValues: value,
  })

  const { data: countries, isFetching: countriesLoading } = useGetCountriesQuery()

  const [getCities, { data: cities, isLoading: citiesLoading }] = useGetCitiesMutation()

  const allCountries = countries?.map(({ name, iso2, iso3, unicodeFlag }) => ({
    value: name,
    label: name,
    iso2,
    iso3,
    unicodeFlag,
  }))

  const allCities = cities?.map((name) => ({ label: name, value: name }))

  const getFlagByCountryName = (countryName: string) => {
    const country = countries?.find(({ name }) => countryName === name)
    return country ? <Twemoji text={country.unicodeFlag} svg /> : <IconWorld size="1.25rem" />
  }

  useEffect(() => {
    if (form.values.state) {
      void getCities({ country: form.values.state })
    }
  }, [form.values.state, getCities])

  useEffect(() => {
    onChange(form.values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values])

  return (
    <>
      <TextInput label="Label" placeholder="Label" mb="md" {...form.getInputProps('label')} />
      <SimpleGrid cols={2}>
        <TextInput label="Address line 1" placeholder="Address line 1" {...form.getInputProps('address1')} />
        <TextInput label="Address line 2" placeholder="Address line 2" {...form.getInputProps('address2')} />
      </SimpleGrid>
      <Stack mt="md">
        <Select
          icon={countriesLoading ? <Loader size="sm" /> : getFlagByCountryName(form.values.state)}
          autoComplete="new-password"
          itemComponent={CountryOption}
          data={allCountries ?? []}
          label="Country"
          placeholder="Select Country"
          searchable
          nothingFound="No country found"
          disabled={countriesLoading}
          {...form.getInputProps('state')}
          withinPortal
          withAsterisk
        />

        <Select
          icon={citiesLoading ? <Loader size="sm" /> : <IconPin size="1.25rem" />}
          autoComplete="new-password"
          data={allCities ?? []}
          label="City"
          placeholder="Select City"
          searchable
          nothingFound={form.values.state === '' ? 'Please select country first' : 'City not found'}
          disabled={citiesLoading || form.values.state === ''}
          {...form.getInputProps('city')}
          withinPortal
          withAsterisk
        />
      </Stack>
    </>
  )
}
