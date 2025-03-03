const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'claims',

  exposes: {
    './routes': './src/app/app.routes.ts',
  },
  remotes:{
    './AuthService':'host-app@http://localhost:8080/remoteEntry.js',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
