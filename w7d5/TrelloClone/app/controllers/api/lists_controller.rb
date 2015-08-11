class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages
    end
  end

  def update
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
