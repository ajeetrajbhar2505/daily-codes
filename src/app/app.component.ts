import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  parentArray: any = [1, 2, 3, 4];
  username = '';
  getdataformchild(value: any) {
    this.username = value;
  }

  speech() {
    // create a new instance of the SpeechSynthesis interface
    const synth = window.speechSynthesis;

    // create a new SpeechSynthesisUtterance object with the desired text
    const utterance = new SpeechSynthesisUtterance('pahale hum html create karte hain then css apply karenge');

    // get all available voices
    const voices = synth.getVoices();
    console.log({voices : voices});
    

    // find a male voice (if available)
    let maleVoice = null;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name.includes('Google हिन्दी')) {
        maleVoice = voices[i];
        break;
      }
    }

    // set the voice of the utterance to the male voice (if available)
    if (maleVoice) {
      utterance.voice = maleVoice;
    }

    utterance.lang = 'hi-IN';
    

    // queue the utterance for synthesis
    synth.speak(utterance);
  }



}
