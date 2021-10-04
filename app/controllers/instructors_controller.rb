class InstructorsController < ApplicationController
    
    # GET
    def index
        instructors = Instructor.all
        render json: instructors
    end
end
