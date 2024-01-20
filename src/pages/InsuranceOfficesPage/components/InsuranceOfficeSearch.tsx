import { Card, Container, Flex, Group, Loader, Radio, Select, TextInput } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

type BranchesSearchProps = {
  loading: boolean
  onSearch: (query: string) => void
  onLimitChange: (limit: number) => void
}

const searchByData = [
  { value: 'name.en', label: 'English Name' },
  { value: 'name.ar', label: 'Arabic Name' },
]

const getLabelByValue = (value: string) => {
  const [searchBy] = searchByData.filter((option) => option.value === value)
  return searchBy ? searchBy.label : ''
}

export const InsuranceOfficeSearch = ({ loading, onSearch, onLimitChange }: BranchesSearchProps) => {
  const [limit, setLimit] = useState(10)
  const [searchByValue, setSearchByValue] = useState<string>('name.en')
  const [searchValue, setSearchValue] = useState<string>('')
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 300)

  useEffect(() => {
    const query = debouncedSearchValue ? JSON.stringify({ [searchByValue]: { $regex: `${debouncedSearchValue}` } }) : ''
    onSearch(query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue, searchByValue])

  useEffect(() => {
    onLimitChange(limit)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit])

  return (
    <Container fluid mt="md">
      <Card shadow="xs" w="100%" radius="md">
        <Flex gap="md" wrap="wrap" w="100%">
          <Flex direction="column" sx={{ flexGrow: 1 }}>
            <TextInput
              miw={200}
              onChange={(event) => setSearchValue(event.currentTarget.value)}
              sx={{ flex: 1 }}
              icon={<IconSearch />}
              label={`Search by ${getLabelByValue(searchByValue)}`}
              placeholder="Search ..."
              rightSection={loading && <Loader size="xs" />}
            />

            <Radio.Group value={searchByValue} name="searchByValue" onChange={setSearchByValue}>
              <Group mt="xs">
                {searchByData.map(({ value, label }) => (
                  <Radio key={value} value={value} label={label} />
                ))}
              </Group>
            </Radio.Group>
          </Flex>
          <Select
            label="Results limit"
            w={100}
            value={`${limit}`}
            onChange={(value) => value && setLimit(Number(value))}
            data={['10', '20', '30', '40', '50']}
            withinPortal
          />
        </Flex>
      </Card>
    </Container>
  )
}
