class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.integer :list_id, null: false
      t.integer :ord, null: false
      t.string :description
      t.timestamps null: false
    end

    add_index :cards, :list_id
    add_index :lists, :board_id
  end
end
