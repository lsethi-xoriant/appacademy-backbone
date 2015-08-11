# This is where we will grab information about lists
json.extract! @board, :id, :title
json.lists do
  json.array! @board.lists do |list|
    json.partial! "api/lists/list", list: list
    json.cards do
      json.array! list.cards do |card|
        json.partial! "api/cards/card", card: card
      end
    end
  end
end
