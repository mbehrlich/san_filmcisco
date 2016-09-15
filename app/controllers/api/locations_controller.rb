class Api::LocationsController < ApplicationController

  def index
    if filter_params
      @locations = Location.filter(filter_params).limit(100)
      render :index
    else
      render json: []
    end
  end

  def update
    @location = Location.find_by(id: params[:id])
    @location.update(location_params)
    render :show
  end

  def location_params
    params.require(:location).permit(:lat, :lng)
  end

  def filter_params
    if params[:filter]
      params.require(:filter).permit(:title, :release_year, :director, :writer, :actor, :company, :distributor)
    else
      nil
    end
  end

end
