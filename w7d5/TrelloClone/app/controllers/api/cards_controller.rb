class Api::CardsController < ApplicationController
  def index
    @cards = Card.where("list_id = ?", params[:list_id])
    render "index"
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      render 'show'
    else
      render json: @card.errors.full_messages
    end
  end

  def show
    @card = Card.find(params[:id])
    render 'show'
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render json: @card
  end

  private
  def card_params
    params.require(:card).permit(:title, :description, :list_id, :ord)
  end
end
