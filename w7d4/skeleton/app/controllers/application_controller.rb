class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :check_login?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    session[:session_token] = nil
  end

  def check_login?
    !!current_user
  end

  def user_params
    params.require(:user).permit(:username,:password)
  end

  def redirect_if_not_login
    redirect_to new_session_url unless check_login?
  end
end
