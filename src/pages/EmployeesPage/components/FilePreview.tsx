import { Button, Card, Center, Image, Skeleton } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite'

type FilePreviewProps = {
  file?: string
}

export const FilePreview = ({ file }: FilePreviewProps) => {
  const uploadedFileExtension = file && file.split('.')[1]
  const isImage = uploadedFileExtension === 'jpeg' || uploadedFileExtension === 'jpg' || uploadedFileExtension === 'png'
  const isPdf = uploadedFileExtension === 'pdf'

  if (!file) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Skeleton animate w={150} h={150} visible={true} />
      </Card>
    )
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={200}>
      {isImage && (
        <Card.Section h={150}>
          <Image
            imageProps={{ style: { height: 150, objectFit: 'cover', objectPosition: 'center' } }}
            src={`https://api.test-london-trade.dev.zaclouds.com/files/${file}`}
            onLoadedData={console.log}
            onLoadedDataCapture={console.log}
          />
        </Card.Section>
      )}
      {isPdf && (
        <Card.Section h={150}>
          <Center>
            <Document
              file={`https://api.test-london-trade.dev.zaclouds.com/files/${file}`}
              loading={<Skeleton h={150} width="100%" />}
              error={<Skeleton h={150} width="100%" />}
            >
              <Page
                height={150}
                pageNumber={1}
                renderMode="canvas"
                renderTextLayer={false}
                renderAnnotationLayer={false}
                renderInteractiveForms={false}
              />
            </Document>
          </Center>
        </Card.Section>
      )}
      <Button
        mt="md"
        compact
        leftIcon={<IconDownload size="1rem" />}
        component="a"
        variant="outline"
        color="blue"
        fullWidth
        radius="md"
        target="_blank"
        href={`https://api.test-london-trade.dev.zaclouds.com/files/${file}`}
      >
        Download
      </Button>
    </Card>
  )
}
