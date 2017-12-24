import React from 'react';
import App from 'components/app/app';

const getApp = function(appList, changeScreen) {
  return appList.map(function(app, i) {
    let prop = {
      app: app.name
    };
    prop.link = app.link;
    return <App key={i} {...prop} changeScreen={changeScreen}/> 
  });
};

module.exports = getApp;
