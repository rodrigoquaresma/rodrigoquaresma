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
        'RD Station is all-in-one Marketing plataform who help businesses to generate more traffic, leads and sales.',
        ['now01b.jpg','now01a.jpg','now02.jpg','now02a.jpg','now03.jpg','now04.jpg','now04a.jpg','now05.jpg','now06.jpg'],
        [['UX design',90],['UI design',80],['interaction design',80],['product design',55],['graphic design',30],['jquery/javascript',20],['ruby/rails',10]],
        [1,3,7],
        '',
        ['//www.rdstation.com.br','product site','rd station'],
        'RD Station is all-in-one Marketing plataform who help businesses to generate more traffic, leads and sales.'
      ],[
        1,
        'NET NOW Video On Demand',
        'for TV',
        'With a thousands of hours of video content and millions of customers, develop all interaction design of a video on demand product in this scenario was really amazing.',
        ['now01b.jpg','now01a.jpg','now02.jpg','now02a.jpg','now03.jpg','now04.jpg','now04a.jpg','now05.jpg','now06.jpg'],
        [['interaction design',100],['UI design',100],['graphic design',80],['product design',40]],
        [0,2,5],
        '',
        ['//www.netcombo.com.br/now','product site','net now'],
        ''
      ],[
        2,
        'Facebook GVT App',
        'for TV',
        'App for Facebook access using the remote control for navigation and the TV as display.',
        ['facebook-feed.jpg','facebook-albuns.jpg','facebook-foto-full.jpg'],
        [['interaction design',100],['graphic design',80],['product design',30],['SVG code',30]],
        [3,4,5],
        '',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv facebook'],
        ''
      ],[
        3,
        'Guide TV App',
        'for tablet',
        'App for tablet with entire programming tv guide and features like record, remember and share in social medias. My icons too',
        ['guia-de-tv-tablet-a.jpg','guia-de-tv-tablet-b.jpg'],
        [['interaction design',100],['graphic design',80],['product design',30]],
        [4,5,6],
        '',
        ['//www.rodrigoquaresma.com.br/blenbox','demo/prototype','tv guide for tablet'],
        ''
      ],[
        4,
        'InstaGVT',
        'for TV',
        'App for Instagram access using the remote control for navigation and the TV as display.',
        ['instagvt-a.jpg','instagvt-b.jpg','instagvt-c.jpg'],
        [['interaction design',100],['graphic design',80],['product design',30],['SVG code',30]],
        [5,6,7],
        'great work! - wall street post',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv instagram'],
        'short description'
      ],[
        5,
        'OxysTV App',
        'for TV',
        '[personal project] OxysTV is a complete set of navigational services, including VoD and PPV services, PVR, content promotion and miniguide for linear TV.',
        ['menu-de-apps-a.jpg','menu-de-apps-b.jpg'],
        [['interaction design',100],['graphic design',70],['product design',40]],
        [0,2,3],
        'great work! - wall street post',
        ['//www.rodrigoquaresma.com.br/oxys','demo/prototype','tv guide for tv'],
        'short description'
      ],[
        6,
        'GVT Apps Menu',
        'for TV',
        'Home for apps for TV of GVT.',
        ['menu-de-apps-a.jpg','menu-de-apps-b.jpg'],
        [['interaction design',100],['graphic design',80],['product design',30],['SVG code',30]],
        [7,0,1],
        '',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv apps menu'],
        ''
      ],[
        7,
        'Oxys Interaction Design',
        'for web',
        'Branding for Oxys, a company of interaction design consultancy (my company, by the way).',
        ['menu-de-apps-a.jpg'],
        [['branding',100],['graphic design',80]],
        [0,1,2],
        '',
        ['//www.oxys.co','site','consultancy'],
        ''
      ]
    ]
  end

  def companies
    [
      [
        0,
        'Resultados Digitais',
        '2013 - now',
        'As a first designer in a startup, my challenges was a very new for me, but the opportunity of develop a web based product starting from beginning is amazing and I learned a lot with this experience. When I arrived at company, it were with 10 employees. Now, it has more than 100 and continuous growing up very fast. And I am part of this success.',
        'Resultados Digitais provides digital marketing services. The company develops Station RD, a software for management and automation of online marketing.',
        ['//www.resultadosdigitais.com.br','site','Resultados Digitais']
      ],[
        1,
        'GVT - Global Village Telecom (Vivendi SA)',
        '2011 - 2013',
        'Spite of being a large company, when I was at GVT, we started a new business inside the company, like a startup. With a various guys coming from others companies, we build the new Pay TV business. I was responsible to do new apps for this new TV. As a designer and as a product manager.',
        'Global Village Telecom is a Brazilian telecommunications company that offers services on landline telephone, broadband for both consumer and business, Pay TV and voice over IP.',
        ['//www.gvt.com.br','site','GVT - Global Village Telecom']
      ],[
        2,
        'NET Serviços de Telecomunicações SA',
        '2009 - 2011',
        'Was my first time working as designer inside a marketing department in a very large company. At NET, I learned a lot of marketing stuff and this was awesome, because was the opportunity to do incredible things by making a bridge between the marketing and engineering.',
        'NET Serviços is Latin America’s largest multi-service cable company. Offering pay TV, broadband internet access and voice services through a single cable.',
        ['//www.netcombo.com.br','site','NET Serviços de Telecomunicações']
      ],[
        3,
        'Grupo RBS',
        '2002 - 2009',
        'In RBS I can say: here is the place that I graduated me as a designer. With a lot of multimedia products like a channel TV, couple of newspapers and some radios, I have had a great opportunity to apply new methodologies and test their success with a millions of users.',
        'Grupo RBS is one of the largest multimedia business groups in Brazil and the largest Rede Globo affiliate, producing content and entertainment on television, radio, newspaper and digital platforms.',
        ['//www.gruporbs.com.br/en/areas-de-atuacao/','site','Grupo RBS']
      ]
    ]
  end

  def params_id
    return params[:id]
  end

end
