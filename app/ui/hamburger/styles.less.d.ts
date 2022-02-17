declare namespace StylesLessNamespace {
  export interface IStylesLess {
    hamburger: string
    menu: string
    menuWrap: string
    toggler: string
  }
}

declare const StylesLessModule: StylesLessNamespace.IStylesLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesLessNamespace.IStylesLess
}

export = StylesLessModule
