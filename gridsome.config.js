// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'tbc.',
  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
        previewMode: false,
        apiUrl: 'https://site-api.datocms.com',
        typeName: 'DatoCms'
      }
    }
  ]
}
