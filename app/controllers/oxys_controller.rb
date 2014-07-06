#coding: utf-8
class OxysController < ApplicationController

  def index
    @area = 'now'
    @visu = 'display'
    render :index
  end

end
