const buildTest = require('robot-eyes/buildTest')

const DEFAULT_OPTIONS = {}
const robotEyes = buildTest(DEFAULT_OPTIONS)

// https://github.com/mercos/robot-eyes#creating-a-test-file
// Read about all available options
describe('robot-eyes-report', function () {
  it('Home', function () {
    return robotEyes('/', this.test.title)
  })

  it('Reference image', function () {
    return robotEyes('/', this.test.title, {
      onReady: async page => {
        await page.click('#vertical .display-button:nth-child(1)')
        await page.click('#horizontal .display-button:nth-child(1)')
        await page.waitFor(200)
      }
    })
  })

  it('Test image', function () {
    return robotEyes('/', this.test.title, {
      onReady: async page => {
        await page.click('#vertical .display-button:nth-child(2)')
        await page.click('#horizontal .display-button:nth-child(2)')
        await page.waitFor(200)
      }
    })
  })

  it('Diff image', function () {
    return robotEyes('/', this.test.title, {
      onReady: async page => {
        await page.click('#vertical .display-button:nth-child(3)')
        await page.click('#horizontal .display-button:nth-child(3)')
        await page.waitFor(200)
      }
    })
  })

  it('Side to side', function () {
    return robotEyes('/', this.test.title, {
      onReady: async page => {
        await page.click('#vertical .display-button:nth-child(4)')
        await page.click('#horizontal .display-button:nth-child(4)')
        await page.waitFor(200)
      }
    })
  })

  it('Change viewport', function () {
    return robotEyes('/', this.test.title, {
      onReady: async page => {
        await page.click('#vertical .viewport-buttons span:nth-child(2)')
        await page.click('#horizontal .viewport-buttons span:nth-child(2)')
        await page.waitFor(200)
      }
    })
  })

  it('Approve all', function () {
    return robotEyes('/', this.test.title, {
      onReady: async page => {
        await page.click('.button.is-success')
        await page.click('.button.is-success')
        await page.click('.button.is-success')
        await page.click('.button.is-success')
        await page.waitFor(200)
      }
    })
  })
})
