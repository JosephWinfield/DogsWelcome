require 'rails_helper'

describe Place do
  it "should have a name attribute" do
    should have_valid(:name).when('Allston Park')
  end
  it "should not have a blank name attribute" do
    should_not have_valid(:name).when(nil, '')
  end

  it "should have an address attribute" do
    should have_valid(:address).when('1234 Harrison Ave')
  end
  it "should not have a blank address attribute" do
    should_not have_valid(:address).when(nil, '')
  end

  it "should have a valid city" do
    should have_valid(:city).when('Boston')
  end

  it "should not have a valid city" do
    should_not have_valid(:city).when(nil, "",)
  end

  it "should have a valid state" do
    should have_valid(:state).when('MA')
  end

  it "should not have a valid state" do
    should_not have_valid(:state).when(nil, "",)
  end

  it "should have a valid zip" do
    should have_valid(:zip).when('01234')
  end

  it "should not have a valid zip" do
    should_not have_valid(:zip).when(nil, "",)
  end

  it "should have a valid category" do
    should have_valid(:category).when('Park')
  end

  it "should not have a valid category" do
    should_not have_valid(:category).when(nil, "",)
  end
end
