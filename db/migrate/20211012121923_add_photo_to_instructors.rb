class AddPhotoToInstructors < ActiveRecord::Migration[6.1]
  def change
    add_column :instructors, :photo_url, :string
  end
end
