#coding: utf-8
class OxysController < ApplicationController

  def index
    @area = 'now'
    @visu = 'display'
    render :index
  end

  def guide
    render :guide
  end

end
