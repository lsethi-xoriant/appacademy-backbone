json.array! @lists do |list|
  json.extract! list, :id, :ord, :title, :board_id
end
