class StaticPagesController < ApplicationController
  before_action :redirect_if_not_login
  def index

  end
end
