var TwilioVoiceSDK = require("nativescript-TwilioVoiceSDK").TwilioVoiceSDK;
var twilioVoiceSDK = new TwilioVoiceSDK();

describe("greet function", function() {
    it("exists", function() {
        expect(twilioVoiceSDK.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(twilioVoiceSDK.greet()).toEqual("Hello, NS");
    });
});