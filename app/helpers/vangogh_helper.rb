module VangoghHelper

  def active_tab(controller, item)
    controller.split("/").first == item ? 'active': ''
  end

  def active_tab2(item)
    'active' if item == @active
  end

  def works
    [
      [
        0,
        'RD Station',
        'for web',
        'RD Station is all-in-one Marketing plataform which help businesses to generate more traffic, leads and sales.',
        ['vangogh/rdstation-0.jpg','vangogh/rdstation-1.jpg','vangogh/rdstation-2.jpg','vangogh/rdstation-3.jpg','vangogh/rdstation-4.jpg','vangogh/rdstation-5.jpg','vangogh/rdstation-6.jpg','vangogh/rdstation-7.jpg','vangogh/rdstation-8.jpg'],
        [['UX design',90],['UI design',80],['interaction design',80],['product design',55],['graphic design',30],['jquery/javascript',20],['ruby/rails',10]],
        [1,3,5],
        '',
        ['//www.rdstation.com.br','product site','rd station'],
        'RD Station is all-in-one Marketing plataform which help businesses to generate more traffic, leads and sales.'
      ],[
        1,
        'NET NOW Video On Demand',
        'for TV',
        'NET NOW is a on demand video platform where millions of customers can access thousands of videos on their Television devices. Designing the end-to-end user interaction for this on demand video platform was really amazing.',
        ['vangogh/netnow-0.jpg','vangogh/netnow-1.jpg','vangogh/netnow-2.jpg','vangogh/netnow-3.jpg','vangogh/netnow-4.jpg','vangogh/netnow-5.jpg','vangogh/netnow-6.jpg','vangogh/netnow-7.jpg','vangogh/netnow-8.jpg','vangogh/netnow-9.jpg','vangogh/netnow-10.jpg','vangogh/netnow-11.jpg','vangogh/netnow-12.jpg','vangogh/netnow-13.jpg'],
        [['interaction design',100],['UI design',100],['graphic design',80],['product design',40]],
        [0,2,5],
        '',
        ['//www.netcombo.com.br/now','product site','net now'],
        ''
      ],[
        2,
        'Facebook GVT App',
        'for TV',
        'App to allow Facebook access over TV display using the remote control for navigation.',
        ['vangogh/gvt-facebook-0.jpg','vangogh/gvt-facebook-1.jpg','vangogh/gvt-facebook-2.jpg','vangogh/gvt-facebook-3.jpg'],
        [['interaction design',100],['graphic design',80],['product design',30],['SVG code',30]],
        [3,4,1],
        '',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv facebook'],
        ''
      ],[
        3,
        'Guide TV App',
        'for tablet',
        'App for tablet bringing entire TV Programs guide and features such as record content, and share in socials or be reminded about favorite TV shows.',
        ['vangogh/gvt-epg-tablet-0.jpg','vangogh/gvt-epg-tablet-1.jpg','vangogh/gvt-epg-tablet-2.jpg','vangogh/gvt-epg-tablet-3.jpg','vangogh/gvt-epg-tablet-4.jpg','vangogh/gvt-epg-tablet-5.jpg'],
        [['interaction design',100],['graphic design',80],['product design',30]],
        [4,5,1],
        '',
        ['//www.rodrigoquaresma.com.br/blenbox','demo/prototype','tv guide for tablet'],
        ''
      ],[
        4,
        'InstaGVT',
        'for TV',
        'App to allow Instagram access over TV display using the remote control for navigation.',
        ['vangogh/gvt-instagvt-0.jpg','vangogh/gvt-instagvt-1.jpg','vangogh/gvt-instagvt-2.jpg','vangogh/gvt-instagvt-3.jpg','vangogh/gvt-instagvt-4.jpg','vangogh/gvt-instagvt-5.jpg'],
        [['interaction design',100],['graphic design',80],['product design',30],['SVG code',30]],
        [0,1,2],
        '',
        ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv instagram'],
        ''
      ],[
        5,
        'OxysTV App',
        'for TV',
        '[personal project] OxysTV is a complete set of navigational services, including VoD and PPV services, PVR, content promotion and miniguide for linear TV.',
        ['vangogh/oxystv-0.jpg','vangogh/oxystv-1.jpg','vangogh/oxystv-2.jpg','vangogh/oxystv-3.jpg'],
        [['interaction design',100],['graphic design',70],['product design',40]],
        [0,2,3],
        '',
        ['//www.rodrigoquaresma.com.br/oxys','demo/prototype','tv guide for tv'],
        ''
      ],[
        6,
        'London 2012 app',
        'for TV',
        'All infos of Olympic Games in this app for TV.',
        ['vangogh/gvt-londres-2012-0.jpg','vangogh/gvt-londres-2012-1.jpg','vangogh/gvt-londres-2012-2.jpg','vangogh/gvt-londres-2012-3.jpg','vangogh/gvt-londres-2012-4.jpg','vangogh/gvt-londres-2012-5.jpg'],
        [['interaction design',100],['graphic design',76],['product design',40]],
        [1,0,3],
        '',
        '',
        ''
      ],[
        7,
        'BlenBox A/B Testing Calculator',
        'for Web',
        'Blenbox A/B Testing Calculator helps you to see if your data has achieved statistical significance. Helpful for usability tests and comparison between landing page conversion rates.',
        ['vangogh/blenbox-ab-testing-calculator-0.jpg'],
        [['product design',90],['interaction design',80],['graphic design',76],['product design',40]],
        [1,6,3],
        '',
        ['//www.blenbox.com/ab-testing-calculator','A/B Testing Calculator','A/B Testing Calculator'],
        ''
      # ],[
      #   6,
      #   'GVT Apps Menu',
      #   'for TV',
      #   'Home for apps for TV of GVT.',
      #   ['vangogh/gvt-menu-apps-0.jpg','vangogh/gvt-menu-apps-1.jpg','vangogh/gvt-menu-apps-2.jpg'],
      #   [['interaction design',100],['graphic design',80],['product design',30],['SVG code',30]],
      #   [7,0,1],
      #   '',
      #   ['//www.gvt.com.br/PortalGVT/Residencial/TV-por-Assinatura#RedesSociais','product site','gvt tv apps menu'],
      #   ''
      # ],[
      #   7,
      #   'Oxys Interaction Design',
      #   'for web',
      #   'Branding for Oxys, a company of interaction design consultancy (my company, by the way).',
      #   ['vangogh/oxys-0.jpg'],
      #   [['branding',100],['graphic design',80]],
      #   [0,1,2],
      #   '',
      #   ['//www.oxys.co','site','consultancy'],
      #   ''
      ]
    ]
  end

  def companies
    [
      [
        0,
        'Resultados Digitais',
        '2013 - now',
        'Being the first designer in a startup company was very challenging to me, also a huge opportunity. being able to develop a web based product since its early stages was an amazing learning experience. When I first arrived at company, we were around 10 employees. Nowadays, we grew to more than 100 employees and we are continuously growing in a very fast pace. I feel part of this case of success.',
        'Resultados Digitais provides digital marketing services. The company develops Station RD, a software for management and automation of online marketing.',
        ['//www.resultadosdigitais.com.br','site','Resultados Digitais']
      ],[
        1,
        'GVT - Global Village Telecom (Vivendi SA)',
        '2011 - 2013',
        'Despite of being a large company, when I started at GVT I felt inside an startup. We started a business unit inside GVT, promoting an environment to attract talented people from other companies to join our project. The scope was to build a new paid TV business. I was responsible to do new apps for this new product, working as designer as well as product manager.',
        'Global Village Telecom is a Brazilian telecommunications company that offers services on landline telephone, broadband for both consumer and business, Pay TV and voice over IP.',
        ['//www.gvt.com.br','site','GVT - Global Village Telecom']
      ],[
        2,
        'NET Serviços de Telecomunicações SA',
        '2009 - 2011',
        'My first time working as designer inside a marketing department of a very large company. At NET, I learned a lot about marketing concepts and was an awesome opportunity to do incredible things. Among them I highlight the work making the connection between the marketing and engineering fields.',
        'NET Serviços is Latin America’s largest multi-service cable company. Offering pay TV, broadband internet access and voice services through a single cable.',
        ['//www.netcombo.com.br','site','NET Serviços de Telecomunicações']
      ],[
        3,
        'Grupo RBS',
        '2002 - 2009',
        'I can say that RBS is the place I learned everything I needed to become a designer. The company owns a large portfolion of multimedia products ranging from TV channels, to newspapers, printed publications and radios stations. I was a great opportunity to apply new design methodologies and test its success and impact over and audience of millions of users.',
        'Grupo RBS is one of the largest multimedia business groups in Brazil and the largest Rede Globo affiliate, producing content and entertainment on television, radio, newspaper and digital platforms.',
        ['//www.gruporbs.com.br/en/areas-de-atuacao/','site','Grupo RBS']
      ]
    ]
  end

  def params_id
    return params[:id]
  end

end
