json.array! @pokemon do |pokemon|
  json.partial! 'pokemon', locals: { pokemon: pokemon, display_toys: false }
end
