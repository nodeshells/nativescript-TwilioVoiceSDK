import {Common} from './TwilioVoiceSDK.common';

declare const TwilioVoice: any;

export class TwilioVoiceSDK extends Common {

  testTwilio() {
    console.dir(TwilioVoice);
    console.log(TwilioVoice.version());
  }
}
