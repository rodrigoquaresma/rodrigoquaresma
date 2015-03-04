module VangoghHelper

  def active_tab(controller, item)
    controller.split("/").last == item ? 'active': ''
  end

  def works
    [
      [0,'Video On Demand - NETNOW','TV','On',['now01b.jpg','now01a.jpg']],
      [1,'Facebook TV App','TV','Aplicativo para acesso do facebook pela TV.',['facebook-feed.jpg']]
    ]
  end

  def params_id
    return params[:id]
  end

end
