import { Grid, Skeleton } from '@mantine/core'

export const LoadingSkeleton = () => {
  const loadingCards = Array(10)
    .fill(0)
    .map((val: number, i: number) => val + i)
  return (
    <>
      {loadingCards.map((card) => (
        <Grid.Col md={6} lg={3} key={card}>
          <Skeleton height={160} radius="md" />
        </Grid.Col>
      ))}
    </>
  )
}
