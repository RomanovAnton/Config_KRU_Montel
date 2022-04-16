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

  // setEventListeners(buttonDeleteColumn, buttonCopyColumn, column, templateSelector, columnSelector) {
  //   buttonDeleteColumn.addEventListener('click', () => {
  //     column.remove()
  //   })
  //   buttonCopyColumn.addEventListener('click', () => {
  //     const newColumn = column.cloneNode(true)
  //     this._container.append(newColumn)
  //     this._select.foo()
  //     this.setEventListeners2()

  // сбор значений текущей колонны
  // const valueArr = Array.from(column.querySelectorAll('.select__current'))
  // let valueCells = []
  // for (let i = 0; i < valueArr.length; i++) {
  //   if (valueArr[i].textContent) {
  //     valueCells.push(valueArr[i].textContent)
  //   } else {
  //     valueCells.push(valueArr[i].value)
  //   }

  // }

  // клонирование колонны
  // const newColumn = this.getTemplate(templateSelector, columnSelector)
  // this._container.append(newColumn)
  // this._select.foo()

  // const valueNewArr = Array.from(newColumn.querySelectorAll('.select__current'))

  // for (let i = 0; i < valueNewArr.length; i++) {


  //  valueNewArr[i].textContent = valueCells[i]

  // if (valueNewArr[i].textContent) {
  //   valueNewArr[i].textContent = valueCells[i].textContent
  // } else {
  //   valueNewArr[i].value = valueCells[i].value
  // }

  //   }


  //  })

  // }

  getTemplate(templateSelector, columnSelector) {
    this._templateSelector = templateSelector
    this._columnSelector = columnSelector
    this._column = document.querySelector(`.${templateSelector}`)
      .content
      .querySelector(`.${columnSelector}`)
      .cloneNode(true)

    this._buttonCopyColumn = this._column.querySelector('.schema__copyButton')
    this._buttonDeleteColumn = this._column.querySelector('.schema__deleteButton')

    this._select.foo()

    // this.setEventListeners(this._buttonDeleteColumn, this._buttonCopyColumn, this._column,
    // this._templateSelector, this._columnSelector)

   
   
    return this._column
  }


  setEventListeners2() {
    let copyBTN = document.querySelectorAll('.schema__copyButton')
    copyBTN.forEach((item) => item.addEventListener('click', (evt) => {
      const newColumn = evt.target.closest('.column-OL').cloneNode(true)
      this._container.append(newColumn)
      this._select.foo()
    }))
  }

}

