import { container } from '../../utils/constant.js'
export class Column {
  constructor() {
    this._container = container
  }

  addColumn(column) {
    this._container.append(column)
  }

  getTemplate(templateSelector, columnSelector) {
    this._templateSelector = templateSelector
    this._columnSelector = columnSelector
    this._column = document.querySelector(`.${templateSelector}`)
      .content
      .querySelector(`.${columnSelector}`)
      .cloneNode(true)

    return this._column
  }

}

