module VangoghHelper

  def active_tab(controller, item)
    controller.split("/").last == item ? 'active': ''
  end

  def works
    [
      [
        0,
        'Video On Demand - NETNOW',
        'TV',
        'Estava trabalhando no marketing e utilizando o design como ponte entre a área de produto e a engenharia no desenvolvimento de aplicações interativas para a TV, quando foi dado o pontapé inicial do projeto de serviço de vídeo sob demanda (VOD - video on demand) na NET, maior empresa de serviços de telecomunicações e entretenimento via cabo da América Latina. A minha sorte foi quando percebemos que as soluções de interface disponíveis no mercado não atendiam exatamente a expectativa que tínhamos. Era a deixa que eu precisava para demonstrar o potencial de trabalhar com foco no usuário e não mais na tecnologia.',
        ['now01b.jpg','now01a.jpg','now02.jpg','now02a.jpg','now03.jpg','now04.jpg','now04a.jpg','now05.jpg','now06.jpg'],
        [['interaction design',100],['graphic design',80]],
        [1,2,3],
        'great work! - wall street post',
        ['//www.netcombo.com.br/now','product site','net now']
      ],[
        1,
        'Facebook TV App',
        'TV',
        'Aplicativo para acesso do facebook pela TV.',
        ['facebook-feed.jpg','facebook-albuns.jpg','facebook-foto-full.jpg'],
        [['interaction design',100],['graphic design',80]],
        [2,3,4],
        'great work! - wall street post',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv facebook']
      ],[
        2,
        'InstaGVT',
        'TV',
        'Aplicativo para acesso do instagram pela TV.',
        ['instagvt-a.jpg','instagvt-b.jpg','instagvt-c.jpg'],
        [['interaction design',100],['graphic design',80]],
        [3,4,5],
        'great work! - wall street post',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv instagram']
      ],[
        3,
        'Guide TV',
        'tablet',
        'Guia de TV para tablet.',
        ['guia-de-tv-tablet-a.jpg','guia-de-tv-tablet-b.jpg'],
        [['interaction design',100],['graphic design',80]],
        [4,5,0],
        'great work! - wall street post',
        ['//www.rodrigoquaresma.com.br/blenbox','demo/prototype','tv guide for tablet']
      ],[
        4,
        'Apps menu for gvt tv',
        'TV',
        'Menu de aplicativos para set top box.',
        ['menu-de-apps-a.jpg','menu-de-apps-b.jpg'],
        [['interaction design',100],['graphic design',80]],
        [5,0,1],
        'great work! - wall street post',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv apps menu']
      ],[
        5,
        'OxysTV',
        'TV',
        'OxysTV is a complete set of navigational services, including VoD and PPV services, PVR, content promotion and miniguide for linear TV.',
        ['menu-de-apps-a.jpg','menu-de-apps-b.jpg'],
        [['interaction design',100],['graphic design',80]],
        [0,1,2],
        'great work! - wall street post',
        ['//www.rodrigoquaresma.com.br/oxys','demo/prototype','tv guide for tv']
      ]
    ]
  end

  def params_id
    return params[:id]
  end

end
