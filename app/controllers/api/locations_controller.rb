class Api::LocationsController < ApplicationController

  def index
    @locations = Location.all
    render :index
  end

  def update
    @location = Location.find_by(id: params[:id])
    @location.update(location_params)
    render :show
  end

  def location_params
    params.require(:location).permit(:lat, :lng)
  end

end
