describe("LuhnValidator", function() {
 
 
     it("can validate a correct account number without spaces", function() {
         var luhnValidator = window.LuhnValidator;
         expect(luhnValidator.isValidAccountNumber("49927398716")).toBeTruthy();
     });
     
     it("can validate a correct account number with spaces", function() {
         var luhnValidator = window.LuhnValidator;
         expect(luhnValidator.isValidAccountNumber("499 273 987 16")).toBeTruthy();
     });
   
   
    describe ("LuhnValidator.helperFunctions", function(){
       
       
       it ("can make a string list of every other number starting at 0", function(){
           var helperFunctions = window.LuhnValidator.helperFunctions;
           var listofEveryOtherNumber = helperFunctions.everyOtherCharacter("49927398716", 0);
           expect(listofEveryOtherNumber).toEqual("497976"); 
       });

       it ("can make a string list of ever other number starting at 1", function(){
           var helperFunctions = window.LuhnValidator.helperFunctions;
           var listofEveryOtherNumber = helperFunctions.everyOtherCharacter("49927398716", 1);
           expect(listofEveryOtherNumber).toEqual("92381"); 
       });

       it ("can double the numbers in a string", function(){
           var helperFunctions = window.LuhnValidator.helperFunctions;
           var doubledNumbers = helperFunctions.doubleEveryNumber("92381");
           expect(doubledNumbers).toEqual("1846162"); 
       });
       
       it ("can sum up every digit in a string", function(){
           var helperFunctions = window.LuhnValidator.helperFunctions;
           var summedNumbers = helperFunctions.sumEachNumber("1846162497976");
           expect(summedNumbers).toEqual(70); 
       });
       
       it ("can remove spaces from a string", function(){
          var helperFunctions = window.LuhnValidator.helperFunctions;
          var stringWithSpaces = "23 13 432 42";
          var stringWithoutSpaces = helperFunctions.removeSpaces(stringWithSpaces);
          expect(stringWithoutSpaces).toEqual("231343242");   
       });
       
       it ("can check whether a number is even", function(){
          var helperFunctions = window.LuhnValidator.helperFunctions;
          expect(helperFunctions.isEven(2)).toBeTruthy();
          expect(helperFunctions.isEven(23)).toBeFalsy();
       });
       
       

    });
   
     
});