test('must be true ', () => {
    
    const isActive = true;

    if (isActive) {
        throw new Error('No está activo');
    }
})
