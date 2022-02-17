import React, { FC, useState } from 'react'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    // Types:
    DragStartEvent,
    DragEndEvent,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy
} from '@dnd-kit/sortable'

import { GridGroup } from '../../ui'
import { GridGroupProps } from '../../ui/grid/grid_group'
import { DndItemProps } from './DndItem'
import { Element } from '../../ui/models'

type DndProps = {
    children: Element<DndItemProps>[]
} & Partial<GridGroupProps>

const DndZone: FC<DndProps> = ({children = [], ...gridGroupProps}: DndProps) => {
    const [activeId, setActiveId] = useState(null as null | string)
    const [ids, setIds] = useState(Array.from({length: children.length}, (_, i) => `${i}`))
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
      })
    )
  
    const handleDragStart = (event: DragStartEvent) => setActiveId(event.active.id)
    
    const handleDragEnd = (event: DragEndEvent) => {
      setActiveId(null)
      const { active, over } = event
  
      if (over && active.id !== over.id) {
        setIds((ids) => {
            const oldIndex = ids.indexOf(active.id)
            const newIndex = ids.indexOf(over.id)

            return arrayMove(ids, oldIndex, newIndex)
        })
      }
    }
    
    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
        >
            <GridGroup 
                {...gridGroupProps}
            >
                <SortableContext items={ids} strategy={rectSortingStrategy}>
                    {ids.map(id => React.cloneElement(
                            children[Number(id)], 
                            {activeId, id, key: id, ...children[Number(id)].props}
                        )
                    )}
                    <DragOverlay adjustScale>
                        {activeId ? (
                            <div style={{opacity: 0.3}}>
                                {children[Number(activeId)]}
                            </div>
                        ) : null}
                    </DragOverlay>
                </SortableContext>
            </GridGroup>
        </DndContext>
    )
}

export default DndZone