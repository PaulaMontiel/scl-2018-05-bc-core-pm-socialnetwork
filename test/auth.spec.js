describe('auth', () => {
    
    it('logoutWithFireBase debería ser una funcion', () => {
        assert.isFunction(logoutWithFireBase);
    });

    it('facebookLoginwithFireBase debería ser una funcion', () => {
        assert.isFunction(facebookLoginwithFireBase);
    });

    it('loginWithFirebase debería ser una funcion', () => {
        assert.isFunction(loginWithFirebase);
    });
    it('googleLoginwithFireBase debería ser una funcion', () => {
        assert.isFunction(googleLoginwithFireBase);
    });
});