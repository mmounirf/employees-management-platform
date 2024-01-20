import { useTheme } from '@emotion/react'
import { Button, Center, Container, Grid, Pagination, Paper, Text, useMantineColorScheme } from '@mantine/core'
import { openModal } from '@mantine/modals'
import { IconPlus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import {
  useGetInsuranceOfficesQuery,
  useLazyGetInsuranceOfficesQuery,
  type InsuranceOfficeType,
} from '../../api/insuranceOffices'
import { EmptyView } from '../../components'

import { PageHeader } from './../../components/PageHeader/PageHeader'
import {
  AddInsuranceOfficesModal,
  EditInsuranceOfficeModal,
  InsuranceOfficeCard,
  InsuranceOfficeSearch,
  LoadingSkeleton,
} from './components'

const extractSearchValue = (query: string) => {
  try {
    const jsonQuery = JSON.parse(query) as { [key: string]: { $regex: string } }
    return Object.values(jsonQuery)[0].$regex
  } catch (error) {
    return undefined
  }
}

export const InsuranceOfficesPage = () => {
  const { colorScheme } = useMantineColorScheme()
  const [limit, setLimit] = useState(10)
  const theme = useTheme()

  const [activePage, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [search, { data: searchResponse, isFetching: isSearching }] = useLazyGetInsuranceOfficesQuery()
  const { data: response, isFetching } = useGetInsuranceOfficesQuery({ limit, page: activePage })
  const dataToRender = query.length > 2 ? searchResponse : response

  const dark = colorScheme === 'dark'

  useEffect(() => {
    if (query.length) {
      void search({ s: query })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const onAddInsuranceOfficeClick = () => {
    openModal({
      title: `Add new insurance office`,
      children: <AddInsuranceOfficesModal />,
      size: 'xl',
      closeOnEscape: false,
      closeOnClickOutside: false,
    })
  }

  const onInsuranceOfficeClick = (insuranceOffice: InsuranceOfficeType) => {
    openModal({
      title: `Edit insurance office - ${insuranceOffice.name.en} - ${insuranceOffice.name.ar}`,
      children: <EditInsuranceOfficeModal data={insuranceOffice} />,
      size: 'xl',
      closeOnEscape: false,
      closeOnClickOutside: false,
    })
  }

  return (
    <Container fluid sx={{ position: 'relative' }} p={0}>
      <Paper
        sx={{
          position: 'sticky',
          top: 70,
          zIndex: 100,
          background: dark ? theme.colors.dark[8] : theme.colors.gray[0],
        }}
      >
        <PageHeader
          title="Insurance Offices"
          subtitle="List, search and filter your insurance office records"
          actionButton={
            <Button variant="light" leftIcon={<IconPlus />} onClick={() => onAddInsuranceOfficeClick()}>
              Add new
            </Button>
          }
        />
        <InsuranceOfficeSearch loading={isSearching} onSearch={setQuery} onLimitChange={setLimit} />
      </Paper>

      <Container fluid>
        <Grid mt="md">
          {isFetching || isSearching ? (
            <LoadingSkeleton />
          ) : dataToRender?.data.data.length ? (
            dataToRender?.data.data.map((insuranceOffice) => (
              <Grid.Col md={6} lg={3} key={insuranceOffice.id}>
                <InsuranceOfficeCard {...insuranceOffice} onClick={onInsuranceOfficeClick} />
              </Grid.Col>
            ))
          ) : (
            <Center w="100%" my="xl">
              <EmptyView
                label={
                  extractSearchValue(query) ? (
                    <Text>
                      No insurance offices records found matching your search input{' '}
                      <strong>{extractSearchValue(query)}</strong>
                    </Text>
                  ) : (
                    <Text>Insurance offices database is empty</Text>
                  )
                }
              />
            </Center>
          )}
        </Grid>

        <Paper
          sx={{ position: 'sticky', bottom: 0, background: dark ? theme.colors.dark[8] : theme.colors.gray[0] }}
          p="md"
        >
          <Center>
            <Pagination total={dataToRender?.pageCount ?? 0} onChange={setPage} withEdges withControls />
          </Center>
        </Paper>
      </Container>
    </Container>
  )
}
