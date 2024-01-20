import { Button, Card, Center, FileButton, Image, Skeleton, Stack } from '@mantine/core'
import { IconDownload, IconUpload } from '@tabler/icons-react'
import { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite'

import { useUploadDocumentMutation } from '../../../api'
import { DocumentResources } from '../../../constants'

type FileFieldProps = {
  label: string
  onChange: (fileName: string) => void
  file?: string | null
  accept?: string
}

export const FileField = ({
  label,
  onChange,
  accept = 'application/pdf,image/png,image/jpeg',
  file = null,
}: FileFieldProps) => {
  const [loading, setLoading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(file)
  const [upload] = useUploadDocumentMutation()

  const onFileSelect = async (file: File | null) => {
    if (!file) {
      return
    }
    setLoading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('resource', DocumentResources.Employees)
    const response = await upload(formData).unwrap()
    setTimeout(() => {
      onChange(response.data.fileName)
      setUploadedFile(response.data.fileName)
      setLoading(false)
    }, 2000)
  }

  const uploadedFileExtension = uploadedFile && uploadedFile.split('.')[1]
  const isImage = uploadedFileExtension === 'jpeg' || uploadedFileExtension === 'jpg' || uploadedFileExtension === 'png'
  const isPdf = uploadedFileExtension === 'pdf'

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {loading && (
        <Card.Section>
          <Skeleton h={150} />
        </Card.Section>
      )}
      {uploadedFile && isImage && (
        <Card.Section h={150}>
          <Image
            imageProps={{ style: { height: 150, objectFit: 'cover', objectPosition: 'center' } }}
            src={`https://api.test-london-trade.dev.zaclouds.com/files/${uploadedFile}`}
            onLoadedData={console.log}
            onLoadedDataCapture={console.log}
          />
        </Card.Section>
      )}
      {uploadedFile && isPdf && (
        <Card.Section h={150}>
          <Center>
            <Document
              file={`https://api.test-london-trade.dev.zaclouds.com/files/${uploadedFile}`}
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
      <Stack mt="md">
        {loading && <Skeleton width="100%" height={26} />}
        {uploadedFile && (
          <Button
            compact
            leftIcon={<IconDownload size="1rem" />}
            component="a"
            variant="outline"
            color="blue"
            fullWidth
            radius="md"
            target="_blank"
            href={`https://api.test-london-trade.dev.zaclouds.com/files/${uploadedFile}`}
          >
            Download {label}
          </Button>
        )}
        <FileButton accept={accept} onChange={(file) => void onFileSelect(file)}>
          {(props) => (
            <Button
              fullWidth
              compact
              variant="light"
              leftIcon={<IconUpload size="1rem" />}
              {...props}
              loading={loading}
            >
              Upload {label}
            </Button>
          )}
        </FileButton>
      </Stack>
    </Card>
  )
}
