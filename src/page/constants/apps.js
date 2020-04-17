import _ from 'lodash';

const apps = {
  home: {
    name: 'home'
  },
  sms: {
    title: 'Message',
    name: 'sms'
  },
  trifacta: {
    title: 'Trifacta',
    name: 'trifacta',
    logo: './src/page/image/trifacta.png',
    url: 'https://www.trifacta.com'
  },
  traderev: {
    title: 'TradeRev',
    name: 'traderev',
    url: 'https://www.traderev.com'
  },
  github: {
    title: 'Github',
    name: 'github',
    link: 'https://github.com/dylanpark/dylanpark.github.io'
  },
  instagram: {
    title: 'Instagram',
    name: 'instagram',
    link: 'https://www.instagram.com/dylanpark98/'
  },
  resistro: {
    title: 'Resistro',
    name: 'resistro',
    link: 'https://www.dylanpark.github.io/resistro'
  }
}

const appList = {
  homeList: [
    apps.instagram, 
    apps.github
  ],
  dockList: [
    apps.sms, 
    apps.trifacta, 
    apps.traderev, 
    apps.resistro
  ]
};

export default _.extend(apps, appList);
