class AddUserIdtoFeed < ActiveRecord::Migration
  def change
    add_column :feeds, :user_id, :string, null: false
    add_index :feeds, :user_id
  end
end
