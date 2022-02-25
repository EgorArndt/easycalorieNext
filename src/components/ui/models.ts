import React from 'react'

export type ResponsiveSize = 's' | 'm' | 'l'
export type SupportsArray<T> = T | T[]
export type Component<Props> = React.ComponentClass<Props> | React.FC<Props>
export type Element<Props> = React.ReactElement<Props>
export type Children<Props> = SupportsArray<Element<Props>>
