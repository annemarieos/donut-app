class Customer < ApplicationRecord
  has_many :orders, through: :donuts
end
