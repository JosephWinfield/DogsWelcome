require 'rails_helper'
feature "sign up", %{
  As an authenticated user
  I want to sign up
  So that I may post a dog friendly place
} do

  # ACCEPTANCE CRITERIA
  # * I must specify a valid email address
  # * I must specify a password and confirm that password
  # * If I do not perform the above, I get an error message
  # * If I provide valid information, I register my account and am authenticated

  scenario "Specifying valid and required information" do
    visit new_user_registration_path
    fill_in "First Name", with: "Mike"
    fill_in "Last Name", with: "Miller"
    fill_in "Address", with: "123 Centre St"
    fill_in "City", with: "Boston"
    fill_in "State", with: "MA"
    fill_in "Zip Code", with: "02135"
    fill_in "Email", with: "m.miller@gmail.com"
    fill_in "user_password", with: "password"
    fill_in "Password Confirmation", with: "password"
    click_button "Sign Up"

    expect(page).to have_content("Welcome")
    expect(page).to have_content("Sign Out")
  end

  scenario "Required information is not provided" do
    visit new_user_registration_path
    click_button "Sign Up"

    expect(page).to have_content("can't be blank")
    expect(page).to_not have_content("Sign Out")
  end

  scenario "Password confirmation does not match password" do
    visit new_user_registration_path

    fill_in "user_password", with: "password"
    fill_in "Password Confirmation", with: "anotherpassword"
    click_button "Sign Up"

    expect(page).to have_content("doesn't match")
    expect(page).to_not have_content("Sign Out")
  end
end
