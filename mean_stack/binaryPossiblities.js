// given "0?1?00?"
// replace ? with either 0 or 1 and return array of all possiblities

function foo(str) {
  res = [];
  function helper(str, i) {
    i = i || 0;
    //console.log(i);
    if (i == str.length) {
      console.log(str);
      return [str];
    }
    if (str[i] == '?') {
      let optionOne = str.slice(0, i) + 0 + str.slice(i + 1);
      let optionTwo = str.slice(0, i) + 1 + str.slice(i + 1);
      i++;
      return res.concat(helper(optionOne, i), helper(optionTwo, i));
    }
    else  {
      i++;
      return helper(str, i);
    }
  }
  res = helper(str);
  return res;
}

foo("???");
