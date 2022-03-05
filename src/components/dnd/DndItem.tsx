import { CSSProperties, FC, ReactElement } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useTheme } from '@emotion/react'

import { AppTheme } from '@theme/models'

type ItemProps = {
  handle: Pick<ReturnType<typeof useSortable>, 'attributes' & 'listeners'>
  isDragging: boolean
  activeId: string | null
}

export type DndItemProps = {
  children: (args: ItemProps) => ReactElement
  id?: string
  activeId?: string | null
}

const DndItem: FC<DndItemProps> = ({
  id = '',
  activeId = '',
  children,
}: DndItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })
  const {
    readonly: {
      zIndex: { modal },
    },
  } = useTheme() as AppTheme
  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? modal : 'auto',
    opacity: isDragging ? 0.3 : 1,
    position: 'relative',
  }

  const handleStyle: CSSProperties = { cursor: 'grab' }

  return (
    <div ref={setNodeRef} style={style}>
      {children({
        handle: { ...listeners, ...attributes, style: { ...handleStyle } },
        isDragging,
        activeId,
      })}
    </div>
  )
}

export default DndItem
