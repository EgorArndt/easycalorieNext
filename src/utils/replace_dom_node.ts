import { render } from 'react-dom'

function replaceNodeWithReactComponent(
  element: HTMLElement,
  reactComponent: any
) {
  const parent = document.createElement('div')
  render(reactComponent, parent, () => {
    element.replaceWith(...Array.from(parent.childNodes))
  })
}

export default replaceNodeWithReactComponent
