class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :length, :video_url, :category_id, :instructor_id

  belongs_to :instructor
  belongs_to :category
end
