import $ from 'jquery';
import { validate } from 'jquery-validation';

const formValidate = function(){
  const form =  $(".contact__form");
  $(".contact__form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
        name: {
          required: "Это поле обязательно к заполнению.",
          minlength: "Пожалуйста, введите не менее 3 символов."
        },
        email: {
          required: "Это поле обязательно к заполнению.",
          email: "Пожалуйста, введите действительный адрес электронной почты."
        }
      },
      submitHandler: function(form) {
        const formData = new FormData(form);
        $.ajax({
          url: "action.php",
          type: "POST",
          data: formData,
          processData: false,  // Сообщить jQuery не передавать эти данные
          contentType: false   // Сообщить jQuery не передавать тип контента
        });
        $(".contact__name").val('');
        $(".contact__email").val('');
        $(".contact__textarea").val('');
      }
  });
  
};

export default formValidate();


