class Api::EntriesController < ApplicationController
  before_action :redirect_if_not_login
  def index
    feed = Feed.find(params[:feed_id])
    render :json => feed.entries
  end

  private
  def entry_params
    params.
      require(:entry)
      .permit(:guid, :link, :published_at, :title, :json, :feed_id)
  end
end
