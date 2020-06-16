'use strict'
const usurper = {}

const log = text => usurper.verbose && console.log(text)

usurper.verbose = false
usurper.disabled =
  process.env.USURPER_DISABLED === 'true'
  || process.env.SLS_STAGE === 'prod'
  || process.env.NODE_ENV === 'production'

usurper.isUsurping = token => !usurper.disabled && token.startsWith('usurp')

usurper.acquireTarget = token => {
  const parts = token.split('=')
  return parts[parts.length - 1]
}

usurper.usurp = token => {
  const result = usurper.isUsurping(token)
  ? [true, usurper.acquireTarget(token)]
  : [false, null]

  result[0] && log(`USURPER (verbose) : [i] - Usurping ${result[1]} identity.`)
  return result
}

usurper.configure = ({ disabled, verbose } = {}) => {
  usurper.verbose = verbose
  usurper.disabled = disabled
}

module.exports = usurper
