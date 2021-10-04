class CategoriesController < ApplicationController

    # GET
    def index
        categories = Category.all
        render json: categories
    end
end
