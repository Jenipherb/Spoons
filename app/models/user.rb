class User < ApplicationRecord
    has_many :spoons 
    has_many :tasks, through: :spoons 
    has_secure_password
end
