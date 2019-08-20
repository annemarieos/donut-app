class DonutsController < ApplicationController 

  def index 
    donuts = Donut.all 
    render json: donuts 
  end 

  def show 
    donut = Donut.find(params[:id])
    render json: donut
  end 

end 