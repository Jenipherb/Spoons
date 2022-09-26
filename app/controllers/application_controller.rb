class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count]}
    end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { error: 'Not Authorized' }, status: :unathorized unless @current_user
    end
end
