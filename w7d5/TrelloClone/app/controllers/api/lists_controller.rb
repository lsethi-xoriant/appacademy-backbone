class Api::ListsController < ApplicationController
  def index
    @lists = List.where("board_id = ? ", params[:board_id])
    render "index"
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render 'show'
    else
      render json: @list.errors.full_messages
    end
  end

  def show
    @list = List.find(params[:id])
    render 'show'
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render json: @list
  end

  private
  def list_params
    params.require(:list).permit(:title, :ord, :board_id)
  end
end
