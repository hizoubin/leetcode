int reverse(int x) {
    long long px = 0; //avoid overflow
    
    while(x != 0) {
        px = px * 10 + x % 10;
        x = x / 10;
    }
    
    return (px > INT_MAX  || px < INT_MIN ) ? 0 : px;
}
