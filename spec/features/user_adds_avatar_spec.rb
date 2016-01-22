require "rails_helper"

feature "avatar" do
  scenario "user uploads an avatar" do
    visit root_path
    click_link "Sign Up"

    fill_in "First Name", with: "Mike"
    fill_in "Last Name", with: "Miller"
    fill_in "Address", with: "123 Centre St"
    fill_in "City", with: "Boston"
    fill_in "State", with: "MA"
    fill_in "Zip Code", with: "02135"
    fill_in "Email", with: "m.miller@gmail.com"
    fill_in "user_password", with: "password"
    fill_in "Password Confirmation", with: "password"
    attach_file "Profile Photo", "#{Rails.root}/spec/support/images/DSC_0041.jpg"
    click_button "Sign Up"

    expect(page).to have_content("Welcome!")
  end
end
