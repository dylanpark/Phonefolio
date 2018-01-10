import React from 'react';
import App from 'components/app/app';

const getApp = function(appList, changeScreen, includeTitle) {
  return appList.map(function(app, i) {
    let prop = {
      app: app.name,
      link: app.link,
      title: includeTitle ? app.title : null
    };
    return <App key={i} {...prop} changeScreen={changeScreen}/>;
  });
};

module.exports = getApp;
