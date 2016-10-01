var dest = './public/build',
    srcHome = './public/javascripts/home/';
		srcSplash = './public/javascripts/splash/';

module.exports = {
  browserify: {
    debug: true, 
    bundleConfigs: [
    {
      entries: srcHome + 'home.js',
      dest: dest,
      outputName: 'home.js'

    },
    {
      entries: srcSplash + 'splash.js',
      dest: dest,
      outputName: 'splash.js'
    }],

    extensions: ['.js']

  }
}
