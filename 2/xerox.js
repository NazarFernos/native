function xerox_minimum_way(N, y, x) {
    if (x < y) {
        Nx_All_time = N * x;
        time = y;
        _time = x;
    }
    else if (y < x) {
        Nx_All_time = N * y;
        time = x;
        _time = y;
    }
    else if (y == x) {
        if(N % 2 == 0) {
            result_time = N / 2 * x;
            return result_time;
        }
        else {
            result_time = Math.floor(N / 2) * x;
            result_time += x;
            return result_time;
        }
    }
    result_time = 0;
    time2 = time;
    for (let i = 0; i < N;) {
        N = N - 1;
        result_time += _time;
        if(time2 <= Nx_All_time) {
            N = N - 1;
            time2 += time;
            Nx_All_time = N * _time;
        }

    }
    return result_time;
}

console.log('2. Secretary Jimny');
console.log(xerox_minimum_way(5,1,2));