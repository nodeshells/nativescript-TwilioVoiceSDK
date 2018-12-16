import {Common} from './TwilioVoiceSDK.common';

declare const com;

export class TwilioVoiceSDK extends Common {
  testTwilio() {
    console.dir(com.twilio.voice);
  }
}

