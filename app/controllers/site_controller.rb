#coding: utf-8
class SiteController < ApplicationController

  def index
    @area = 'now'
    @visu = 'display'
    render 'index'
  end

  def now
    @area = 'now'
    @visu = 'display'
    render :index
  end

  def clicesportes
    @area = 'clicesportes'
    @visu = 'tv'
    render :index
  end

  def refap
    @area = 'refap'
    @visu = 'brands'
    render :index
  end

  def clicrbs
    @area = 'clicrbs'
    @visu = 'paper'
    render :index
  end

  def facebook_gvt_tv
    @area = 'facebook_gvt_tv'
    @visu = 'tv'
    render :index
  end

  def instagvt
    @area = 'instagvt'
    @visu = 'paper'
    render :index
  end

  def guia_de_tv_tablet
    @area = 'guia_de_tv_tablet'
    @visu = 'brands'
    render :index
  end

  def menu_de_apps
    @area = 'menu_de_apps'
    @visu = 'display'
    render :index
  end

end
