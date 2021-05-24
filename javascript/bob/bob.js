//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (msj) => {
  msj = msj.trim();
	const isShouting = msj.toUpperCase() === msj && msj.toLowerCase() !== msj;
  const isQuestion = msj.endsWith('?');

  if (isQuestion) {
    if (isShouting){
      return 'Calm down, I know what I\'m doing!';
    }
    return 'Sure.';
  }
	if (isShouting){
		return 'Whoa, chill out!';
	} 
  if (msj) {
    return 'Whatever.';
	}
  return 'Fine. Be that way!';
};
