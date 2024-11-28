import { renderHook } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'
import { contextFactory } from './context-factory'

type ConnectionContextType = {
  isConnected: boolean
  url: string
}

const hook = 'useConnectionContext'
const provider = 'ConnectionProvider'

describe('context-factory', () => {
  it('defines the context and hook', () => {
    const [ConnectionContext, useConnectionContext] =
      contextFactory<ConnectionContextType>({
        hook,
        provider,
      })

    expect(ConnectionContext).toBeDefined()
    expect(useConnectionContext).toBeDefined()
  })

  it('returns the initialized context state values via the hook', () => {
    const URL = 'https://test.com'
    const initialState: ConnectionContextType = {
      isConnected: false,
      url: URL,
    }

    const [ConnectionContext, useConnectionContext] =
      contextFactory<ConnectionContextType>(
        {
          hook,
          provider,
        },
        initialState,
      )

    expect(ConnectionContext).toBeDefined()
    expect(useConnectionContext).toBeDefined()

    const { result } = renderHook(() => useConnectionContext())

    expect(result.current.isConnected).toBe(false)
    expect(result.current.url).toBe(URL)
  })

  it("throws error when using the hook if the context isn't defined", () => {
    const [ConnectionContext, useConnectionContext] =
      contextFactory<ConnectionContextType>({
        hook,
        provider,
      })

    expect(ConnectionContext).toBeDefined()
    expect(useConnectionContext).toBeDefined()

    const { result } = renderHook(() => useConnectionContext())

    expect(result.error).toBeDefined()
    expect(result.error?.message).toBe(
      `${hook} must be used in a child of ${provider}`,
    )
  })
})
