import { Column } from '../components/Column/Column.js';
import { container } from '../utils/constant.js'
import {
  buttonAddOL,
} from '../utils/constant.js';


let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');


  selectHeader.forEach(item => {
    item.addEventListener('click', (evt) => selectToggle(evt))
  });

  selectItem.forEach(item => {
    item.addEventListener('click', (evt) => selectChoose(evt))
  });

  function selectToggle(evt) {
    evt.target.closest('.select').classList.add('is-active');
  }

  // удаление элемента для того чтобы не было наслоения одинаковых элементов друг на друга
  function addElement(container, element) {
    const elementName = element.className
    const activElement = container.querySelector(`.${elementName}`)
    if (container.contains(activElement)) {
      activElement.remove()
    }
    container.append(element)
  }



  function loadElementImage(url, imageStyle) {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add(imageStyle)
    return img;
  }


  function selectChoose(evt) {

    let text = evt.target.innerText,
      select = evt.target.closest('.select'),
      column = evt.target.closest('.column-OL'),
      countTT = column.querySelector('.countTT'),
      powerWindingTT = column.querySelector('.powerWindingTT'),
      currentText = select.querySelector('.select__current');

    currentText.innerText = text;
    select.classList.remove('is-active');



    switch (currentText.innerText) {
      case '0,5s / 0,5 / 10p':
        addElement(column, loadElementImage('./images/ТТ_3_3.png', 'schema__ТТ-image'))
        powerWindingTT.value = '10 / 10 / 15'
        break
      case '0,5s / 10p':
        addElement(column, loadElementImage('./images/ТТ_3_2.png', 'schema__ТТ-image'))
        powerWindingTT.value = '10 / 15'
        break
    }

    switch (countTT.innerText) {
      case '2':
        addElement(column, loadElementImage('./images/ТТ_0_0.png', 'schema_TT_00'))
        break
      case '3':
        column.querySelector('.schema_TT_00').remove()
        break
    }
  }

};



// --------------------------------------------------------------------------------------
const Columns = new Column({
  foo: select
})

// function setEventListener () {
//   buttonCopyColumn.addEventListener('click', (evt) => {
//     let copyElement = evt.target.closest('.column-OL');
//     Columns.addColumn(copyElement);
//     select()
//   })
// }


buttonAddOL.addEventListener('click', () => {
  Columns.addColumn(Columns.getTemplate('template-column-OL', 'column-OL'))
})






let observer = new MutationObserver(mutationRecords => {
  let currentColumn = mutationRecords[0].addedNodes[0]
  console.log(currentColumn)

  let copyBtn = currentColumn.querySelector('.schema__copyButton')
  copyBtn.addEventListener('click', () => {
    let newColumn = currentColumn.cloneNode(true)
    container.append(newColumn)
    select()
  })
  // copyBtn.forEach((item) => {


  //   item.addEventListener('click', (evt) => {
  //     const newColumn = evt.target.closest('.column-OL').cloneNode(true)
  //     container.append(newColumn)
  //     select()
  //   })
  // })




  // let newColumn = mutationRecords[0].addedNodes[0].cloneNode(true)// DOM добавленной колонны
  // let copyBTN = newColumn.querySelector('.schema__copyButton')
  // copyBTN.addEventListener('click', () => {
  //   console.log('fsfs')
  //   // container.append(newColumn)
  //   // select()

  // })
})
// наблюдать за всем, кроме атрибутов
observer.observe(container, {
  childList: true, // наблюдать за непосредственными детьми
});


