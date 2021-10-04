class Workout < ApplicationRecord
  belongs_to :category
  belongs_to :instructor
  has_many :takens
  has_many :users, through: :takens
end
