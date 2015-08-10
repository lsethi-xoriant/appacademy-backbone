# This is where we will grab information about lists
json.extract! @board, :id, :title
json.lists do
  json.array! @board.lists do |list|
    json.partial! "api/lists/list", list: list
  end
end
