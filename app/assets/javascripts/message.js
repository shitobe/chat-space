$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =  `<div class="chat-main__message-list-board__lists">
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
    } else {
      var html =  `<div class="chat-main__message-list-board__lists">
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
    }
    return html
  }
  $('#new_message').on('submit' , function(e){
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
      console.log(html)
      $('.chat-main__message-list-board').append(html);
      $('#message_content').val('');
      $('.chat-main__message-form__form-box__send-btn').prop('disabled', false);
      $('.chat-main__message-list-board').animate({ scrollTop: $('.chat-main__message-list-board')[0].scrollHeight})

    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.chat-main__message-form__form-box__send-btn').prop('disabled', false);

    })


  })
});