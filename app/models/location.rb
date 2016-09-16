class Location < ActiveRecord::Base

  validates :title, :location, presence: true

  def self.filter(filters)
    results = Location.where("LOWER(title) LIKE ? AND LOWER(director) LIKE ? AND LOWER(writer) LIKE ? AND (LOWER(actor1) LIKE ? OR LOWER(actor2) LIKE ? OR LOWER(actor3) LIKE ?) AND LOWER(company) LIKE ? and LOWER(distributor) LIKE ?",
    "%#{filters['title'].downcase}%",
    # "%#{filters['release_date']}%",
    "%#{filters['director'].downcase}%",
    "%#{filters['writer'].downcase}%",
    "%#{filters['actor'].downcase}%",
    "%#{filters['actor'].downcase}%",
    "%#{filters['actor'].downcase}%",
    "%#{filters['company'].downcase}%",
    "%#{filters['distributor'].downcase}")
    # p filters['release_year']
    unless filters['release_year'] == ""
      results = results.where("release_year = ?", filters['release_year'].to_i)
    end
    results
  end

end
