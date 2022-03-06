import { FC } from 'react'
import { useForm } from 'react-hook-form'

import FooterActions from './FooterActions'
import { Box, Label, Input, Textarea, BoxProps } from '@ui'
import ErrorPopup from 'components/helpers/ErrorPopup'

type EditorProps = {
  fields: Array<{
    label: string
    id: string
    config?: Record<string, unknown>
  }> | null
  onSave: (data: unknown) => void
  onCancel: () => void
} & BoxProps

const Editor: FC<EditorProps> = ({
  fields,
  onSave,
  onCancel,
  ...props
}: EditorProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Box column center width='100%' gap='1rem' {...props}>
      {fields ? (
        fields.map(({ label, id, config = {} }) => (
          <Box key={id} column width='100%'>
            <Label id={id} align={['space-between', 'center']}>
              {label}
              <Input size='s' width='70%' {...register(id, { ...config })} />
            </Label>
            {errors && errors[id] && (
              <ErrorPopup text={errors[id].message} spacing={{ my: 0.5 }} />
            )}
          </Box>
        ))
      ) : (
        <Textarea />
      )}
      <FooterActions
        cb1={handleSubmit((data) => onSave(data))}
        cb2={onCancel}
      />
    </Box>
  )
}

export default Editor
