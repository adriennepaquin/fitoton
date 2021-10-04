class User < ApplicationRecord
    has_secure_password
    
    has_many :takens, dependent: :destroy
    has_many :workouts, through: :takens, dependent: :destroy

    validates :username, :password, presence: {message: "must be present"}
    validates :username, uniqueness: {message: "already taken"}
    validates :password, length: { minimum: 8, too_short: "must be at least 8 characters"}

    def hash_password
        if password.present?
            return self.password_digest = BCrypt::Password.create(password)
        end
    end
end
