json.extract! pokemon, :id, :attack, :defense, :image_url, :moves, :name, :poke_type
if display_toys
  json.toys do
    json.array! toys do |toy|
      json.partial! 'toys/toy', locals: { toy: toy }
    end
  end
end
