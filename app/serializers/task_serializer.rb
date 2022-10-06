class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :due, :user_ids
end
