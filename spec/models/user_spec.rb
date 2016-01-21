require 'rails_helper'

describe User do
  it "should have a first_name attribute" do
    should have_valid(:first_name).when('Foo')
  end
  it "should not have a blank first_name attribute" do
    should_not have_valid(:first_name).when(nil, '')
  end

  it "should have a last_name attribute" do
    should have_valid(:last_name).when('Bar')
  end
  it "should not have a blank last_name attribute" do
    should_not have_valid(:last_name).when(nil, '')
  end

  it "should have a valid email address" do
    should have_valid(:email).when(
      "user@example.com",
      "another@gmail.com"
    )
  end

  it "should not have a valid email address" do
    should_not have_valid(:email).when(
      nil,
      "",
      "urser",
      "urser@com",
      "urserba.com"
    )
  end

  it "has a matching password confirmation for the password" do
    user = User.new
    user.password = "password"
    user.password_confirmation = "anotherpassword"
    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end
end
