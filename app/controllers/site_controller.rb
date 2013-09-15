#coding: utf-8
class SiteController < ApplicationController

  def index
    @content = params[:content]
    render 'index'
  end

end
