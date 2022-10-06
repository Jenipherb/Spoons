class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :password_confirmation
  has_many :spoons
  has_many :tasks
end
