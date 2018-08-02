function bracesValid(str) {
    var tracker = [];
    var op = [["{", "}"],["[", "]"],[ "(", ")"]]
    for (var i = 0; i < str.length; i ++) {
        if (str[i] == op[0][0] || str[i] == op[1][0] || str[i] == op[2][0]) {
            tracker.push(str[i]);
        }
        else if (str[i] == op[0][1]) {
            var check = tracker.pop()
            if (check != op[0][0]) {
                return false;
            }
        }
        else if (str[i] == op[1][1]) {
            var check = tracker.pop()
            if (check != op[1][0]) {
                return false;
            }
        }
        else if (str[i] == op[2][1]) {
            var check = tracker.pop()
            if (check != op[2][0]) {
                return false;
            }
        }
    }
    return true;
}

bracesValid("{{()}}[]");
bracesValid("{(})");