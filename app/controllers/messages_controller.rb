class MessagesController < ApplicationController
  def index
  end

  def create
    @message = Message.new(massage_params)
    if @message.save
      redirect_to group_massage_path(@message.)
    else
      render :new
    end
  private
  def massage_params
    params.require(:message).permit(:name, user_ids: [] )
  end
end
