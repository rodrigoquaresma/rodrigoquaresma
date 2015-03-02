module VangoghHelper

  def active_tab(controller, item)
    controller.split("/").last == item ? 'active': ''
  end

  def works
    [
      [0,'NOW - video on demand','tv','app for tv','now01b.jpg'],
      [1,'facebook na tv','tv','Aplicativo para acesso do facebook pela TV.','facebook-feed.jpg']
    ]
  end

end
