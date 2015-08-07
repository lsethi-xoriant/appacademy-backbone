class Api::BoardsController < ApplicationController
  def index
    @boards = Board.where("user_id = ?", current_user.id)
    render json: @boards
  end

  def new
  end

  def create
  end

  def show
    @board = Board.find(params[:id])
    render 'show'
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
