class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :json => @users
  end

  def show
    @user = User.find(params[:id])
    render :json => @user
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :json => @user
    else
      render :json => @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy!
    render :json => @user
  end
end
