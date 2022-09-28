class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
  
    before_action :authorize

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count]}
    # end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { error: 'Not Authorized' }, status: :unathorized unless @current_user
    end

    private

    def record_not_found_response(e)
      render json: { error: e }, status: 404
    end
  
    def record_invalid_response(e)
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
