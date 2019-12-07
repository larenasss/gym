// Использованна библиотека Inputmask
// https://github.com/RobinHerbots/Inputmask

import { default as inputmask } from '../../node_modules/inputmask/dist/jquery.inputmask';

$(document).ready(function(){
  let weight = $('#weight');
  let age = $('#age');
  let height = $('#height');
  let phone = $('.modal__input-phone');
  let modal = $('.modal');
  let modalWeight = $('.modal__weight');
  let modalText = $('.modal__text').find('p')
  let body = $('body')
  let modalPhone = $('.modal__phone');
  
  weight.inputmask("999{1} кг", {
    placeholder: ' ',
    showMaskOnHover: false,
    noValuePatching: false,
    numericInput: true
  });

  age.inputmask("99{1} лет", {
    placeholder: ' ',
    showMaskOnHover: false,
    noValuePatching: false,
    numericInput: true
  });

  height.inputmask("999{1} см", {
    placeholder: ' ',
    showMaskOnHover: false,
    noValuePatching: false,
    numericInput: true,
  });

  phone.inputmask("+7 (999) 999-9999", {
    showMaskOnHover: false,
    noValuePatching: false,
  });

  $('.form__input').focusin(function(){
    this.value = '';
  });

  // Запрет скрола и вывод модалки формы

  let noScroll = function() {
    modal.css('display', 'block');
    modalWeight.css('display', 'block');
    body.css({
      'overflow': 'hidden',
      'margin-right': '17px'
    });
  }  

  // Снятие запрета скрола и закрытие модалки формы

  let yesScroll = function() {
    modal.css('display', 'none');
    modalWeight.css('display', 'none');
    modalPhone.css('display', 'none');
    body.css({
      'overflow': 'auto',
      'margin-right': '0'
    });
  }

  // Валидация формы на вес

  $('#myForm').on('submit', function(e) {
    e.preventDefault();
    let weightValue = parseInt(weight.val());
    let ageValue = parseInt(age.val());
    let heightValue = parseInt(height.val());

    let gender = $('input[name=gender]:checked');
    let genderValue = gender.val();

    let body = $('input[name=body]:checked');
    let bodyValue = body.val();
    
    
    // Мужчины
    if (weightValue <= 55 && genderValue == 1) {
      modalText.text('Похоже, лишний вес вам не грозит. А значит, вам прямая дорога в тренажерный зал — набирать мышечную массу и приобретать заветный рельеф. Персональные тренировки помогут выстроить грамотную программу и добиться результатов быстрее. А протеиновый коктейль в нашем фитнес-баре после тренировки станет источником необходимого белка!')
    }
    
    if (weightValue >= 55 && weightValue < 70 && genderValue == 1) {
      modalText.text('Ваше тело в хорошей форме! Но совершенству нет предела. Разнообразьте свои нагрузки: возможно, вас заинтересует армрестлинг, кикбоксинг или скалолазание. Не забывайте чередовать занятия в тренажерном зале с кардиотренировками. А чтобы оценить все разнообразие наших предложений, запишитесь на гостевой визит с 50% скидкой!')
    }

    if (weightValue > 70  && genderValue == 1) {
      modalText.text('Перебор. Даже если любите тренажерный зал, попробуйте добавить кардионагрузки 1-2 раза в неделю. Бег на дорожке, секции борьбы, тренировки Pump не только укрепят сердечно-сосудистую систему, но и приведут тело в лучшую форму. Тренировки в зале лучше проводить в многоповторном режиме. Обратитесь к персональному тренеру — он составит вам эффективную программу.')
    }

    if (weightValue >= 70  && bodyValue == 2) {
      modalText.text('Кажется, вы готовитесь к чемпионату по бодибилдингу? Персональные тренировки в зале помогут выстроить грамотную программу и добиться результатов быстрее. А чтобы разнообразить нагрузку, обратите свое внимание на групповые программы, которые потренируют сердечно-сосудистую систему и повысят выносливость организма.')
    }

    //Женщины
    if (weightValue <= 55 && genderValue == 2) {
      modalText.text('Похоже, лишний вес вам не грозит. А значит, вам прямая дорога в тренажерный зал — набирать мышечную массу и приобретать эффектные формы. Персональные тренировки помогут выстроить грамотную программу и добиться результатов быстрее. И не забывайте о растяжке после тренировок!')
    }
    
    if (weightValue >= 55 && weightValue < 70 && genderValue == 2) {
      modalText.text('Ваше тело в хорошей форме! Но совершенству нет предела. Разнообразьте свои нагрузки: функциональные тренировки позволят почувствовать свое тело, танцевальные занятия добавят гибкости и пластики, а йога приведет в порядок не только тело, но и душу. А чтобы оценить все разнообразие наших предложений, запишитесь на гостевой визит с 50% скидкой!')
    }

    if (weightValue > 70  && genderValue == 2) {
      modalText.text('Перебор. Обратите свое внимание на интенсивные кардиотренировки, позволяющие эффективно сжигать жировые запасы. Выбирайте на свой вкус: зажигательная зумба, степ-аэробика, сайкл-студия или пробежка на беговой дорожке. И не забывайте о правильном питании! Мы поможем вам составить индивидуальный рацион. И через пару месяцев вы себя не узнаете!') 
    }

    if (weightValue >= 70 && genderValue == 2  && bodyValue == 3) {
      modalText.text('Хрупкое телосложение плюс лишний вес — так называемый скинни фэт. Кардионагрузки — ваше все! Дополняйте интенсивные тренировки посещениями тренажерного зала — и вы сможете поддерживать свое тело в отличной форме. Танцы добавят телу гибкости и плстичности. И не забывайте о растяжке после тренировок!') 
    }
    noScroll();    
  })

  // Закрытие модалки формы по клику

  $('.modal__close').on('click', () => {
    yesScroll();
  })

  // Вывод модалки звонка

  $('.header__link-phone').on('click', function(e) {
    e.preventDefault();

    modal.css('display', 'block');
    modalPhone.css('display', 'block');
    body.css({
      'overflow': 'hidden',
      'margin-right': '17px'
    });

  })
  


  
});