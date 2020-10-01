const runServer = require('../runServer')
const { resolve } = require('path')

runServer([
  {
    name: 'vertical',
    viewports: [
      {
        name: '1920x1080',
        diffImage: resolve('./integrationTests/exampleImages/1920x1080/vertical_diff.png'),
        referenceImage: resolve('./integrationTests/exampleImages/1920x1080/vertical_reference.png'),
        testImage: resolve('./integrationTests/exampleImages/1920x1080/vertical_test.png')
      },
      {
        name: '1366x768',
        diffImage: resolve('./integrationTests/exampleImages/1366x768/vertical_diff.png'),
        referenceImage: resolve('./integrationTests/exampleImages/1366x768/vertical_reference.png'),
        testImage: resolve('./integrationTests/exampleImages/1366x768/vertical_test.png')
      }
    ]
  },
  {
    name: 'horizontal',
    viewports: [
      {
        name: '1920x1080',
        diffImage: resolve('./integrationTests/exampleImages/1920x1080/horizontal_diff.png'),
        referenceImage: resolve('./integrationTests/exampleImages/1920x1080/horizontal_reference.png'),
        testImage: resolve('./integrationTests/exampleImages/1920x1080/horizontal_test.png')
      },
      {
        name: '1366x768',
        diffImage: resolve('./integrationTests/exampleImages/1366x768/horizontal_diff.png'),
        referenceImage: resolve('./integrationTests/exampleImages/1366x768/horizontal_reference.png'),
        testImage: resolve('./integrationTests/exampleImages/1366x768/horizontal_test.png')
      }
    ]
  }
], 80)
