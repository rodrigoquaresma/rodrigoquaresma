module VangoghHelper

  def active_tab(controller, item)
    controller.split("/").last == item ? 'active': ''
  end

  def works
    [
      [
        0,
        'RD Station',
        'for web',
        'Estava trabalhando no marketing e utilizando o design como ponte entre a área de produto e a engenharia no desenvolvimento de aplicações interativas para a TV, quando foi dado o pontapé inicial do projeto de serviço de vídeo sob demanda (VOD - video on demand) na NET, maior empresa de serviços de telecomunicações e entretenimento via cabo da América Latina. A minha sorte foi quando percebemos que as soluções de interface disponíveis no mercado não atendiam exatamente a expectativa que tínhamos. Era a deixa que eu precisava para demonstrar o potencial de trabalhar com foco no usuário e não mais na tecnologia.',
        ['now01b.jpg','now01a.jpg','now02.jpg','now02a.jpg','now03.jpg','now04.jpg','now04a.jpg','now05.jpg','now06.jpg'],
        [['interaction design',100],['graphic design',80]],
        [1,3,7],
        'great work! - wall street post',
        ['//www.rdstation.com.br','product site','rd station'],
        'Estava trabalhando no marketing e utilizando o design como ponte entre a área de produto e a engenharia no desenvolvimento de aplicações interativas para a TV...'
      ],[
        1,
        'NET NOW Video On Demand',
        'for TV',
        'Estava trabalhando no marketing e utilizando o design como ponte entre a área de produto e a engenharia no desenvolvimento de aplicações interativas para a TV, quando foi dado o pontapé inicial do projeto de serviço de vídeo sob demanda (VOD - video on demand) na NET, maior empresa de serviços de telecomunicações e entretenimento via cabo da América Latina. A minha sorte foi quando percebemos que as soluções de interface disponíveis no mercado não atendiam exatamente a expectativa que tínhamos. Era a deixa que eu precisava para demonstrar o potencial de trabalhar com foco no usuário e não mais na tecnologia.',
        ['now01b.jpg','now01a.jpg','now02.jpg','now02a.jpg','now03.jpg','now04.jpg','now04a.jpg','now05.jpg','now06.jpg'],
        [['interaction design',100],['graphic design',80]],
        [0,2,5],
        'great work! - wall street post',
        ['//www.netcombo.com.br/now','product site','net now'],
        'short description'
      ],[
        2,
        'Facebook GVT App',
        'for TV',
        'Aplicativo para acesso do facebook pela TV.',
        ['facebook-feed.jpg','facebook-albuns.jpg','facebook-foto-full.jpg'],
        [['interaction design',100],['graphic design',80]],
        [3,4,5],
        'great work! - wall street post',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv facebook'],
        'short description'
      ],[
        3,
        'Guide TV App',
        'for tablet',
        'Guia de TV para tablet.',
        ['guia-de-tv-tablet-a.jpg','guia-de-tv-tablet-b.jpg'],
        [['interaction design',100],['graphic design',80]],
        [4,5,6],
        'great work! - wall street post',
        ['//www.rodrigoquaresma.com.br/blenbox','demo/prototype','tv guide for tablet'],
        'short description'
      ],[
        4,
        'Instagram GVT App',
        'for TV',
        'Aplicativo para acesso do instagram pela TV.',
        ['instagvt-a.jpg','instagvt-b.jpg','instagvt-c.jpg'],
        [['interaction design',100],['graphic design',80]],
        [5,6,7],
        'great work! - wall street post',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv instagram'],
        'short description'
      ],[
        5,
        'OxysTV App',
        'for TV',
        'OxysTV is a complete set of navigational services, including VoD and PPV services, PVR, content promotion and miniguide for linear TV.',
        ['menu-de-apps-a.jpg','menu-de-apps-b.jpg'],
        [['interaction design',100],['graphic design',80]],
        [0,2,3],
        'great work! - wall street post',
        ['//www.rodrigoquaresma.com.br/oxys','demo/prototype','tv guide for tv'],
        'short description'
      ],[
        6,
        'GVT TV Apps Menu',
        'for TV',
        'Menu de aplicativos para set top box.',
        ['menu-de-apps-a.jpg','menu-de-apps-b.jpg'],
        [['interaction design',100],['graphic design',80]],
        [7,0,1],
        'great work! - wall street post',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv apps menu'],
        'short description'
      ],[
        7,
        'Oxys Interaction Design',
        'for web',
        'OxysTV is a complete set of navigational services, including VoD and PPV services, PVR, content promotion and miniguide for linear TV.',
        ['menu-de-apps-a.jpg'],
        [['interaction design',100],['graphic design',80]],
        [0,1,2],
        'great work! - wall street post',
        ['//www.oxys.co','site','consultancy'],
        'short description'
      ]
    ]
  end

  def companies
    [
      [
        0,
        'Resultados Digitais',
        '2013 - now',
        'my goals',
        'Resultados Digitais provides digital marketing services. The company develops Station RD, a software for management and automation of online marketing.',
        ['//www.resultadosdigitais.com.br','site','Resultados Digitais']
      ],[
        1,
        'GVT - Global Village Telecom (Vivendi SA)',
        '2011 - 2013',
        'my goals',
        'Global Village Telecom is a Brazilian telecommunications company that offers services on landline telephone, broadband for both consumer and business, Pay TV and voice over IP.',
        ['//www.gvt.com.br','site','GVT - Global Village Telecom']
      ],[
        2,
        'NET Serviços de Telecomunicações SA',
        '2009 - 2011',
        'my goals',
        'NET Serviços is Latin America’s largest multi-service cable company. Offering pay TV, broadband internet access and voice services through a single cable.',
        ['//www.netcombo.com.br','site','NET Serviços de Telecomunicações']
      ],[
        3,
        'Grupo RBS',
        '2002 - 2009',
        'my goals',
        'Grupo RBS is one of the largest multimedia business groups in Brazil and the largest Rede Globo affiliate, producing content and entertainment on television, radio, newspaper and digital platforms.',
        ['//www.gruporbs.com.br/en/areas-de-atuacao/','site','Grupo RBS']
      ]
    ]
  end

  def params_id
    return params[:id]
  end

end
