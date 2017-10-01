class WelcomesController < ApplicationController

  def index
    @welcomes = Welcome.all
  end

  private
end
