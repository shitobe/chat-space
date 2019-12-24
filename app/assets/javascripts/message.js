$(function(){
  function resetForm(){
    $('#new_message')[0].reset();
    $('.chat-main__message-form__form-box__send-btn').prop('disabled', false);
  }
  function buildHTML(message){
    if (message.content && message.image) {
      var html =  `<div class="chat-main__message-list-board__lists" data-message-id= ${message.id}>
      <div class="chat-main__message-list-board__lists__list">
        <div class="chat-main__message-list-board__lists__list__input-to">
          <div class="chat-main__message-list-board__lists__list__input-to--name">
            ${message.user_name}
          </div>
          <div class="chat-main__message-list-board__lists__list__input-to--date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message-list-board__lists__list__message">
          <p class="chat-main__message-list-board__lists__list__message__content">
            ${message.content}
          </p>
          <img class="chat-main__message-list-board__lists__list__message__image" src="${message.image}" alt="Images">
        </div>
      </div>
    </div>`
    } else if(message.content){
      var html =  `<div class="chat-main__message-list-board__lists" data-message-id= ${message.id}>
      <div class="chat-main__message-list-board__lists__list">
        <div class="chat-main__message-list-board__lists__list__input-to">
          <div class="chat-main__message-list-board__lists__list__input-to--name">
          ${message.user_name}
          </div>
          <div class="chat-main__message-list-board__lists__list__input-to--date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message-list-board__lists__list__message">
          <p class="chat-main__message-list-board__lists__list__message__content">
            ${message.content}
          </p>
        </div>
      </div>
</div>`
    }else if(message.image){
      var html =  `<div class="chat-main__message-list-board__lists" data-message-id= ${message.id}>
      <div class="chat-main__message-list-board__lists__list">
        <div class="chat-main__message-list-board__lists__list__input-to">
          <div class="chat-main__message-list-board__lists__list__input-to--name">
            ${message.user_name}
          </div>
          <div class="chat-main__message-list-board__lists__list__input-to--date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message-list-board__lists__list__message">
          <img class="chat-main__message-list-board__lists__list__message__image" src="${message.image}" alt="Images">
        </div>
      </div>
    </div>`
    }
    
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.chat-main__message-list-board').append(html);
      $('.chat-main__message-list-board').animate({ scrollTop: $('.chat-main__message-list-board')[0].scrollHeight})
      resetForm();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      resetForm();
    })
  });
  var reloadMessages = function(){
    last_message_id = $('.chat-main__message-list-board:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages){
        if(messages.length !== 0){
          var insertHTML = '';
          $.each(messages,function(i, message){
            insertHTML += buildHTML(message)
          });
          $('.chat-main__message-list-board').append(insertHTML);
          $('.chat-main__message-list-board').animate({ scrollTop: $('.chat-main__message-list-board')[0].scrollHeight});
          resetForm();
        }
      })
      .fail(function(){
        console.log('error');
      });
    };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});