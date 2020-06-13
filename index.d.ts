/// <reference types="typescript" />
type SuccessAndIdentity = [boolean, string]
declare namespace Usurper {
  interface Options {
    /**
     * Disable usurpging
     * @default process.env.USURPER_DISABLED === 'true' || process.env.SLS_STAGE === 'dev' || process.env.NODE_ENV === 'dev'
     */
    readonly disabled?: boolean

    /**
     * Log in console usurped identity
     * @default false
     */
    readonly verbose?: boolean
  }

  /**
   * Determine whether usurping will proceed
   * @param token Usurping token (probaly your authorization header)
   */
  function isUsurping(token: string): boolean

  /**
   * Parse a token to acquire usurping target
   * @param token Usurping token (probaly your authorization header)
   */
  function acquireTarget(token: string): string

  /**
   * Run usurping process on a token
   * @param token Usurping token (probaly your authorization header)
   */
  function usurp(token: string): SuccessAndIdentity

  /**
   * Reconfigure Usurper module
   * @param options Options to override defaults
   */
  function configure(options: Options): void
}

export = Usurper