import React from 'react'

export type Component = React.ComponentClass<any> | React.FC<any>

export type OnOpen = {
  component: Component
  componentId: string
  props?: { [key: string]: unknown }
}

type CollectionItemState = {
  component: Component
  id: string
  props?: { [key: string]: unknown }
  isVisible: boolean
}

type State = Readonly<{ [id: string]: CollectionItemState }>

export class ModalCollection extends React.Component<
  Record<string, unknown>,
  State
> {
  static ref? = null as ModalCollection | null
  readonly state: State = {}

  componentDidMount() {
    ModalCollection.ref = this
  }

  componentWillUnmount() {
    delete ModalCollection.ref
  }

  static open = ({ component, componentId, props }: OnOpen) => {
    const reference = ModalCollection.ref
    const id = componentId || (component.displayName as string)

    if (reference) {
      reference.setState({
        [id]: { component, props, id, isVisible: true },
      })
    }
  }

  static close = (id: string) => {
    const reference = ModalCollection.ref
    if (reference && id) {
      reference.setState((state) => ({
        [id]: { ...state[id], isVisible: false },
      }))
    }
  }

  render() {
    const state = ModalCollection.ref?.state
    const collectionIds = state && Object.keys(state)

    return (
      <>
        {state && collectionIds?.length
          ? collectionIds.map((itemId) => {
              const { component, props, isVisible, id } = state[itemId]
              const ModalElement = component
              return isVisible ? (
                <ModalElement key={id} {...props} isVisible />
              ) : null
            })
          : null}
      </>
    )
  }
}
