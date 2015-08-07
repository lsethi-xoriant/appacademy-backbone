class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
              user_params[:username],
              user_params[:password]
            )
    if @user
      login(@user)
    else
      flash.now[:errors] = ["Invalid Login Information"]
      render :new
    end
  end

  def destroy
    logout!
  end
end
