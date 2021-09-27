class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :length
      t.string :video_url
      t.belongs_to :category, null: false, foreign_key: true
      t.belongs_to :instructor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
