class Task < ApplicationRecord
    has_many :spoons 
    has_many :users, through: :spoons
end
