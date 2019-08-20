class CustomersController < ApplicationController 

  def index
    customers = Customer.all 
    render json: customers
  end 

  def show 
    customer = Customer.find(params[:id])
    render json: customer 
  end 

end 