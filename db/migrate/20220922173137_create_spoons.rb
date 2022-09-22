class CreateSpoons < ActiveRecord::Migration[7.0]
  def change
    create_table :spoons do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :task, null: false, foreign_key: true
      t.integer :spoon

      t.timestamps
    end
  end
end
