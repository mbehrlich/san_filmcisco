class Location < ActiveRecord::Base

  validates :title, :location, presence: true

  def self.filter(filters)
    results = Location.where("title LIKE ? AND director LIKE ? AND writer LIKE ? AND (actor1 LIKE ? OR actor2 LIKE ? OR actor3 LIKE ?) AND company LIKE ? and distributor LIKE ?",
    "%#{filters['title']}%",
    # "%#{filters['release_date']}%",
    "%#{filters['director']}%",
    "%#{filters['writer']}%",
    "%#{filters['actor']}%",
    "%#{filters['actor']}%",
    "%#{filters['actor']}%",
    "%#{filters['company']}%",
    "%#{filters['distributor']}")
    # p filters['release_year']
    unless filters['release_year'] == ""
      results = results.where("release_year = ?", filters['release_year'].to_i)
    end
    results
  end

end
