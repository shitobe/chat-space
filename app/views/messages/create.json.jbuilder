json.content  @message.content
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image    @message.image.url
json.user_id  @message.user_id
json.user_name @message.user.name