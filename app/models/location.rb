class Location < ActiveRecord::Base

  validates :title, :location, presence: true

end
