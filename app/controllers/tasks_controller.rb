class TasksController < ApplicationController

    def index 
        render json: Task.all
    end

    def show
        task = find_task
        render json: task
    end

    def create
        render json: Task.create!(task_params) 
    end

    def update
        task = Task.update!(task_params)
        render json: task, status: :accepted 
    end

    def destroy
        task = find_task
        task.destroy
        head :no_content
    end


    private

    def task_params
        params.permit(:title, :priority, :due, :description)
    end

    def find_task
        Task.find(params[:id])
    end
end
