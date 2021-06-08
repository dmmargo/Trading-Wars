require 'test_helper'

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get welcome_index_url
    assert_response :success
  end

  test "should get current" do
    get welcome_current_url
    assert_response :success
  end

  test "should get portfolio" do
    get welcome_portfolio_url
    assert_response :success
  end

  test "should get history" do
    get welcome_history_url
    assert_response :success
  end

  test "should get news" do
    get welcome_news_url
    assert_response :success
  end

  test "should get myaccount" do
    get welcome_myaccount_url
    assert_response :success
  end

end
