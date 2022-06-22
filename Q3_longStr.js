/**
 * @param {string} 
 * @return {number}
 */
//sliding window
 var lengthOfLongestSubstring = function(s) {
    let window = "";
    let maxStr = "";
    
    for(let i=0;i<s.length;i++){
        if(window.includes(s.charAt(i))==false){    //the windows does include this charater
          window += s.charAt(i); //add to the window

          
        }else if(window.includes(s.charAt(i))==true){
          if(window.length>maxStr.length){
            maxStr = window;
        }
          window = ""; //empty the window
          window += s.charAt(i); //add to the window

        }
    }

   return maxStr.length;
};

