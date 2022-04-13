import { container } from '../../utils/constant.js'
export class Column {
  constructor() {
    
    

    // this._selectHeader = document.querySelectorAll('.select__header');
    // this._selectItem = document.querySelectorAll('.select__item');
    this._container = container

  }

  addColumn() {
    this._container.append(this._column)
  }

  getTemplate(templateSelector, columnSelector) {
    this._column = document.querySelector(`.${templateSelector}`)
      .content
      .querySelector(`.${columnSelector}`)
      .cloneNode(true)
    return this._column
  }

  // _setEventListeners() {
  //   console.log(this._column)
  //   this._selectHeader.forEach(item => { item.addEventListener('click', console.log('ok')) });
  //   this._selectItem.forEach(item => { item.addEventListener('click', console.log('ok') )});
  // }

  // _selectToggle() {
  //   console.log(this.parentElement)
  //   this.parentElement.classList.toggle('is-active');
  // }

// удаление элемента для того чтобы не было наслоения одинаковых элементов друг на друга
// addElement(container, element) {
//   const elementName = element.className
//   const activElement = container.querySelector(`.${elementName}`)
//   if (container.contains(activElement)) {
//     activElement.remove()
//   }
//   container.append(element)
// }



// function loadElementImage(url, imageStyle) {
//   const img = document.createElement('img');
//   img.src = url;
//   img.classList.add(imageStyle)
//   return img;
// }


// _selectChoose() {

//   let text = this.innerText,
//     select = this.closest('.select'),
//     column = this.closest('.column-OL')
//   // console.log(column)

//   countTT = column.querySelector('.countTT')
//   // console.log(countTT)
//   powerWindingTT = column.querySelector('.powerWindingTT')

//   currentText = select.querySelector('.select__current');
//   currentText.innerText = text;
//   select.classList.remove('is-active');



  //   switch (currentText.innerText) {
  //     case '0,5s / 0,5 / 10p':
  //       addElement(column, loadElementImage('./images/ТТ_3_3.png', 'schema__ТТ-image'))
  //       powerWindingTT.value = '10 / 10 / 15'
  //       break
  //     case '0,5s / 10p':
  //       addElement(column, loadElementImage('./images/ТТ_3_2.png', 'schema__ТТ-image'))
  //       powerWindingTT.value = '10 / 15'
  //       break
  //   }

  //   switch (countTT.innerText) {
  //     case '2':
  //       addElement(column, loadElementImage('./images/ТТ_0_0.png', 'schema_TT_00'))
  //       break
  //     case '3':
  //       column.querySelector('.schema_TT_00').remove()
  //       break
  //   }
  // }

  

//}
}