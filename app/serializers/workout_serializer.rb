class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :length, :video_url, :category_id, :instructor_id

  belongs_to :instructor
  belongs_to :category
  has_many :takens
  has_many :users, through: :takens
end
