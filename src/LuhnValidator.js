window.LuhnValidator =  {
    
    
    isValidAccountNumber : function (inputAccountNum){
      
      //Check to make sure the inputAccountNum isn't empty or null
      if (inputAccountNum === null || inputAccountNum.length === 0)
        return false;
      
      // first remove the spaces
      var accountNum =  this.helperFunctions.removeSpaces(inputAccountNum);
      
      // Normally in the Luhn algorythm we double every number from the right.  
      // this is the same as doubling every other number from the left, but start
      // at 0 for even lengths and 1 for odd lengths
      var numbersToDouble;
      var numbersToAdd;
      if (this.helperFunctions.isEven(accountNum.length)){
        numbersToDouble = this.helperFunctions.everyOtherCharacter(accountNum, 0);    
        numbersToAdd = this.helperFunctions.everyOtherCharacter(accountNum, 1);   
      }
      else{
        numbersToDouble = this.helperFunctions.everyOtherCharacter(accountNum, 1);    
        numbersToAdd = this.helperFunctions.everyOtherCharacter(accountNum, 0);   
      }
      // double every number from the right 
      var doubledNumbers = this.helperFunctions.doubleEveryNumber(numbersToDouble);
      // Add up all the digits
      var summedUpNumbers = this.helperFunctions.sumEachNumber(doubledNumbers + numbersToAdd);
      // varify that the last number is a 0
      if ((summedUpNumbers % 10) === 0)
        return true;
      else
        return false;  
      
    },

    helperFunctions : {
        
      everyOtherCharacter: function(inputString, startPosition){
        var everyOtherCharacterString = '';
        for (var i = startPosition; i < inputString.length; i=i+2){
          everyOtherCharacterString += inputString.charAt(i);
        }
        return everyOtherCharacterString;
      },

      doubleEveryNumber : function(numbersAsString){
        var doubledNumbers = ''; // it is a string - so + will append
        for (var i = 0; i < numbersAsString.length; i++){
          doubledNumbers += (numbersAsString.charAt(i)*2);
        }
        return doubledNumbers;   
      }, 
      
      sumEachNumber : function(numbersAsString){
        var summedNumbers = 0; // it is a number so + will add numerically
        for (var i = 0; i < numbersAsString.length; i++){
          summedNumbers += (numbersAsString.charAt(i)*1);
        }
        return summedNumbers;     
          
      },
  
      removeSpaces : function (stringWithSpaces){
          return stringWithSpaces.split(' ').join('');
      },
      
      isEven : function (num){
        return (num %2) === 0;   
      }
      
    } 

}; 