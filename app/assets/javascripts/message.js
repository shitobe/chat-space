$(function(){
  $('#new_message').on('submit' , function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('/groups/6/messages')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      console.log(message)
    })
    .fail(function(){
      error 'エラー'
    })
  })
});