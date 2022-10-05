class SpoonsController < ApplicationController

    def index
        render json: Spoon.all
    end

    def show
        render json: Spoon.find(params[:id])
    end

    def create
        @spoons = Spoon.new spoons_params
        @spoons.user = @current_user
        @spoons.save
        render json: @spoons
    end

    def update 
        post = Spoon.find(params[:id])
        render json: post
    end

    def destroy
        spoon = Spoon.find(params[:id])
        spoon.destroy
        head :no_content
    end


    private

    def spoons_params
        params.permit(:spoon, :task_id)
    end
end
