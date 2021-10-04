class WorkoutsController < ApplicationController
    before_action :authenticate
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET
    def index
        workouts = Workout.all
        render json: workouts
    end

    # GET /:id
    def show
        workouts = Taken.where(user_id: params[:id])
        if workouts
            render json: workouts
        else
            render json: {error: "No auditions found"}
        end
    end
end
