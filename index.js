describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  });
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
describe("logShout(string)", function () {
    it("receives one argument and logs it in all caps", function () {
        expect(sayHi)
      expect(logShout("hello")).toEqual("HELLO");
    });
  }); 
    function logShout(string) {
      console.log(string.toUpperCase());
    }
    function logWhisper(string) {
      console.log(string.toLowerCase());
    }
describe("sayHiToHeadphonedRoommate(string)", function () {
    it('returns "I cant hear you!" if `string` is lowercase', function() { 
      expect(sayHiToHeadphonedRoommate("hello")).toEqual("I cant hear you!");
    })
    
    it('returns "YES INDEED!" if `string` is uppercase', function() {
     expect(sayHiToHeadphonedRoommate("HELLO")).toEqual("YES INDEED!")
   })
                                                                                                                                                       
   it('returns "I would love to!" if `string` is "Lets have dinner together!"`', function() { 
      expect(sayHiToHeadphonedRoommate("Let/'s have dinner together!")).toEqual("I would love to!")
   })
  })
  function sayHiToHeadphonedRoommate(string) {
    var canthear = "I can't hear you!";
    var yesindeed = "YES INDEED!";
    var letus = "Let/'s have dinner together!";
    if (string.toLowerCase(string) === string) {
      return canthear};
    if (string.toUpperCase(string) === string) {
      return yesindeed};
    if (string = letus){
      return "I would love to!"}
    }
    
