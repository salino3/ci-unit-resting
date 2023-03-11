
import { renderHook, act, waitFor } from '@testing-library/react';
import { usePolling } from './pollingHooks';
 


describe('usePolling specs', () => {

  

    it('should return count equals 0 when inizialize the hook', () => {
      // Arrange
      const pollingTime = 500;

      // Act
      const { result } = renderHook(() => usePolling(pollingTime));

      // Assert
      expect(result.current.count).toEqual(0);
    });

    it('should return count equals 1 when it waits for next update', async () => {
      // Arrange
      const pollingTime = 500;

      // Act
      const { result } = renderHook(() => usePolling(pollingTime));

      // Assert
      await waitFor(() => {
        expect(result.current.count).toEqual(1);
      });
    });

    it('should return count equals 3 when it waits for next update', async () => {
      // Arrange
      const pollingTime = 500;

      // Act
      const { result } = renderHook(() => usePolling(pollingTime));

      // Assert
      await waitFor(() => {
        expect(result.current.count).toEqual(3);
      },{timeout: 2000});
    });

    // beforeEach(() => {
    //   jest.useFakeTimers();
    // });

    // afterEach(() => {
    //   jest.runOnlyPendingTimers();
    //   jest.useRealTimers();
    // });
    

});