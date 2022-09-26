class TasksController < ApplicationController

    def index 
        render json: Task.all
    end

    def show
        render json: Task.create!(task_params) 
    end


    private

    def task_params
        params.require(:title, :priority, :due).permit(:description)
    end
end
