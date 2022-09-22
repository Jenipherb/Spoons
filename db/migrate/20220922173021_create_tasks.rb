class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.string :priority
      t.integer :due

      t.timestamps
    end
  end
end
