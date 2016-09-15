# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
file = File.read('./db/data.json')
data_hash = JSON.parse(file)
data_hash["data"].each do |datum|
  location = Location.create({
    title: datum[8],
    release_year: datum[9],
    location: datum[10],
    facts: datum[11],
    company: datum[12],
    distributor: datum[13],
    director: datum[14],
    writer: datum[15],
    actor1: datum[16],
    actor2: datum[17],
    actor3: datum[18]
  })
  # location.save
  # p location.errors.full_messages
end
