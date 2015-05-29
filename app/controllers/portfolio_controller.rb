class PortfolioController < ApplicationController
  def index
    @active = "projects"
  end

  def show
    @active = "projects"
  end

  def about
    @active = "about"
  end

  def experience
    @active = "experience"
  end
end
