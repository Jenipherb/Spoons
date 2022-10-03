class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :password_confirmation
end
