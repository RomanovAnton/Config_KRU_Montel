import { container } from '../../utils/constant.js'
export class Column {
  constructor(foo) {
    this._container = container
    this._select = foo
  }

  addColumn() {
    this._container.append(this._column)
    this._select.foo()
  }

  // setEventListeners(column) {
  //   let copyBTN = column.querySelector('.schema__copyButton')
  //   copyBTN.addEventListener('click', (evt) => {
  //     const newColumn = evt.target.closest('.column-OL').cloneNode(true)
  //     this._container.append(newColumn)
  //     this._select.foo()
  //   })
  // }


  getTemplate(templateSelector, columnSelector) {
    this._templateSelector = templateSelector
    this._columnSelector = columnSelector
    this._column = document.querySelector(`.${templateSelector}`)
      .content
      .querySelector(`.${columnSelector}`)
      .cloneNode(true)

    // this.setEventListeners(this._column)
    this._select.foo()

    return this._column
  }

}

