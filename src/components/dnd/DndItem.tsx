import { CSSProperties, FC, ReactElement } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

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

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : 'auto',
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
