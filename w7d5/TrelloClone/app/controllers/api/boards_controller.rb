class Api::BoardsController < ApplicationController
  def index
    @boards = Board.where("user_id = ?", current_user.id)
    render :index
  end

  def new
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id
    if @board.save
      render :index
    else
      render json: @board.errors.full_messages, status: :unprocessable_entity
    end
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

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
