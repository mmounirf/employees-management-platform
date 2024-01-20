import { useTheme } from '@emotion/react'
import { Button, Center, Container, Grid, Pagination, Paper, Text, useMantineColorScheme } from '@mantine/core'
import { openModal } from '@mantine/modals'
import { IconPlus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { EditDepartmentPayload, useGetDepartmentsQuery, useLazyGetDepartmentsQuery } from '../../api'
import { EmptyView } from '../../components'

import { PageHeader } from './../../components/PageHeader/PageHeader'
import {
  AddDepartmentModal,
  DepartmentCard,
  DepartmentSearch,
  EditDepartmentModal,
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

export const DepartmentsPage = () => {
  const { colorScheme } = useMantineColorScheme()
  const [limit, setLimit] = useState(10)
  const theme = useTheme()

  const [activePage, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [search, { data: searchResponse, isFetching: isSearching }] = useLazyGetDepartmentsQuery()
  const { data: response, isFetching } = useGetDepartmentsQuery({ limit, page: activePage })
  const dataToRender = query.length > 2 ? searchResponse : response

  const dark = colorScheme === 'dark'

  useEffect(() => {
    if (query.length) {
      void search({ s: query })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const onAddDepartmentClick = () => {
    openModal({
      title: `Add new deparment`,
      children: <AddDepartmentModal />,
      size: 'xl',
      closeOnEscape: false,
      closeOnClickOutside: false,
    })
  }

  const onDepartmentClick = (department: EditDepartmentPayload) => {
    openModal({
      title: `Edit deparment - ${department.name.en} - ${department.name.ar}`,
      children: <EditDepartmentModal data={department} />,
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
          title="Departments"
          subtitle="List, search and filter your departments' records"
          actionButton={
            <Button variant="light" leftIcon={<IconPlus />} onClick={() => onAddDepartmentClick()}>
              Add new
            </Button>
          }
        />
        <DepartmentSearch loading={isSearching} onSearch={setQuery} onLimitChange={setLimit} />
      </Paper>

      <Container fluid="md">
        <Grid mt="md">
          {isFetching || isSearching ? (
            <LoadingSkeleton />
          ) : dataToRender?.data.data.length ? (
            dataToRender?.data.data.map((employeeData) => (
              <Grid.Col md={6} lg={3} key={employeeData.id}>
                <DepartmentCard {...employeeData} onClick={onDepartmentClick} />
              </Grid.Col>
            ))
          ) : (
            <Center w="100%" my="xl">
              <EmptyView
                label={
                  extractSearchValue(query) ? (
                    <Text>
                      No departments records found matching your search input{' '}
                      <strong>{extractSearchValue(query)}</strong>
                    </Text>
                  ) : (
                    <Text>Departments database is empty</Text>
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
