module VangoghHelper

  def active_tab(controller, item)
    controller.split("/").last == item ? 'active': ''
  end

  def works
    ['dde','ddc']
  end

end
