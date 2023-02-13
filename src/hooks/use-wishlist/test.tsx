import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'
import { render } from 'utils/test-utils'
import { useWishlist, WishlistProvider } from '.'

describe('useWishlist', () => {
  it('should return wishlist items', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })
  })
})
