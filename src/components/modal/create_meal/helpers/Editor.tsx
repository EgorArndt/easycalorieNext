import { FC } from 'react'

import FooterActions from './FooterActions'
import { Box, Label, Input, Textarea ,BoxProps} from '@ui'

type EditorProps = {
  fields: Array<{ name: string }> | null
  onSave: () => void
  onCancel: () => void
} & BoxProps

const Editor: FC<EditorProps> = ({ fields, onSave, onCancel, ...props }: EditorProps) => (
  <Box column center width='100%' gap='1rem' {...props}>
    {fields ? fields.map(({ name }) => (
      <Label key={name} id={name} align={['space-between', 'center']}>
        {name}
        <Input size='s' width='70%' />
      </Label>
    ))
    : 
    <Textarea />
    }
    <FooterActions cb1={onSave} cb2={onCancel} />
  </Box>
)

export default Editor
