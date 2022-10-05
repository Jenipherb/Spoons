class SpoonsController < ApplicationController

    def index
        render json: Spoon.all
    end

    def show
        render json: Spoon.find(params[:id])
    end

    def create
        render json: Spoon.create!(spoon_params)
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

    def spoon_params
        params.require(:spoon)
    end
end
