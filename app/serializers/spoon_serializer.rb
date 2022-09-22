class SpoonSerializer < ActiveModel::Serializer
  attributes :id, :spoon
  has_one :user
  has_one :task
end
