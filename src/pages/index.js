let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
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


  function selectChoose() {

    let text = this.innerText,
      select = this.closest('.select'),
      column = this.closest('.column-OL')
    countTT = column.querySelector('.countTT')

    powerWindingTT = column.querySelector('.powerWindingTT')

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


select();

