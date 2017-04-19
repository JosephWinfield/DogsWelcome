class Place < ActiveRecord::Base
  belongs_to :user

  mount_uploader :image, PlacesPhotoUploader

  geocoded_by :full_address
  after_validation :geocode

  STATE = [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
  ]

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state,
    inclusion: {
      in: STATE
    }
  validates :zip, presence: true
  validates :category, presence: true

  def full_address
    [ address, city, state, zip ].compact.join(", ")
  end
end
