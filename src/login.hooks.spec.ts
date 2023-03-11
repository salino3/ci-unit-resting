import {renderHook, act, waitFor} from '@testing-library/react';
import { Credential, User } from './model';
import * as api from './api';
import { useLogin } from './login.hooks';

describe('useLogin specs', () => {

    it('should return an object: credential with default values and setCredential a function when it calls it', () => {
        // Arrange

        // Act
        const {result } = renderHook(useLogin);

        // Assert
        const defaultCredential: Credential = {name: "", password: ""};
    expect(result.current.credential).toEqual(defaultCredential);
    expect(result.current.setCredential).toEqual(expect.any(Function))

    })

     it('should update credential when it calls setCredential', () => {
       // Arrange
       const newCredential: Credential = { name: 'admin', password: 'test' };

       // Act
       const { result } = renderHook(useLogin);

       act(() => {
         result.current.setCredential(newCredential);
       });

       // Assert
       const defaultCredential: Credential = { name: '', password: '' };
       expect(result.current.credential).toEqual(newCredential);
     });

     it('should return user equals null and onLogin function', () => {
       // Arrange
       const newCredential: Credential = { name: 'admin', password: 'test' };

       // Act
       const { result } = renderHook(useLogin);

       act(() => {
         result.current.setCredential(newCredential);
       });

       // Assert
       expect(result.current.user).toBeNull();
       expect(result.current.onLogin).toEqual(expect.any(Function));
     });
     
});





