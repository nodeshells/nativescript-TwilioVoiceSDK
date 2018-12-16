import {Observable} from 'tns-core-modules/data/observable';
import {TwilioVoiceSDK} from 'nativescript-TwilioVoiceSDK';

export class HelloWorldModel extends Observable {
  public message: string;
  private twilioVoiceSDK: TwilioVoiceSDK;

  constructor() {
    super();

    this.twilioVoiceSDK = new TwilioVoiceSDK();
    this.message = this.twilioVoiceSDK.message;
    this.twilioVoiceSDK.testTwilio();
  }
}
