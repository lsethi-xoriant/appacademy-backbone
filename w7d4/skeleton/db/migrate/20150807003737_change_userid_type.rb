class ChangeUseridType < ActiveRecord::Migration
  def change
    remove_column :feeds, :user_id
    add_column :feeds, :user_id, :integer, null:false
    add_index :feeds, :user_id
  end
end
