class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :due
end
