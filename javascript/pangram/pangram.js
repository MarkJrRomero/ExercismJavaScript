//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (s) => {

  s = s.toLowerCase();

  var literki = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
  't','u','v','w','x','y','z']

  var i = 0;

  literki.forEach((litera) => {

    if(s.includes(litera)){
      i++;
    }

  });
  if(i==26){
    return true
  }else{
    return false
  }

};