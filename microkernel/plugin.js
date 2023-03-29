const myLoggerCC = {
  name: 'myLogger',
  hooks: [
    {
      hook: 'SETUP',
      action: async (payload, additionalParameters) => {
        console.log('SETUP');
      }
    },
    {
      hook: 'EXECUTION_PRE',
      action: async (payload, additionalParameters) => {
        console.log('EXECUTION_PRE');
      }
    }
  ]
}

module.exports = {
  myLoggerCC
}