// complete the given function

function palindrome(str){
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

	let left=0
	let right=str.length-1

	while(left<rigth){

		if(cleanStr[left]!==cleanStr[right]){

			return false
			
		}

		left++;
		right--
	}

	return true
	

}
module.exports = palindrome
