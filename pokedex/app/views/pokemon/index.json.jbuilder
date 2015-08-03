json.array! @pokemon do |pokemon|
  json.partial! 'pokemon', locals: { pokemon: pokemon }
end
