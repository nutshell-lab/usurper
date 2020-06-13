const Usurper = require('./index')
const test = require('ava')

const validToken = 'usurp=sorian@nutshell-lab.com'
const badToken = 'badPattern=sorian@nutshell-lab.com'
const target = 'sorian@nutshell-lab.com'

test('module can be configured to be disabled programmatically', t => {
  Usurper.configure({ disabled: () => true })
  const result = Usurper.usurp(validToken)
  t.deepEqual(result, [false, null])
  Usurper.configure({ disabled: false })
})

test('module recognize usurping pattern', t => {
  const result = Usurper.isUsurping(validToken)
  t.true(result)
})

test('module ignore other patterns', t => {
  const result = Usurper.isUsurping(badToken)
  t.false(result)
})

test('module parse usurping pattern to acquire target', t => {
  const result = Usurper.acquireTarget(validToken)
  t.is(result, target)
})

test('module default action is to usurp if not disabled', t => {
  const result = Usurper.usurp(validToken)
  t.deepEqual(result, [true, target])
})
