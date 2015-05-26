require 'test_helper'

class PortfolioControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get experience" do
    get :experience
    assert_response :success
  end

end
