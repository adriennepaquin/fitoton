class WorkoutsController < ApplicationController
    # before_action :authenticate, only: [:show]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET
    def index
        workouts = Workout.all
        render json: workouts
    end

    # GET /:id
    def show
        takens = Taken.where(user_id: params[:id])
        if takens
            workouts = takens.map{|taken| taken.workout}
            render json: workouts
        else
            render json: {error: "No auditions found"}
        end
    end
end
