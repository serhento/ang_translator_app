import { Component, OnInit} from '@angular/core';
import { GoogleService, GoogleObj } from '../google.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
  providers: [GoogleService]
})
export class TranslateComponent implements OnInit {

  public googleObj: GoogleObj = new GoogleObj();
  public result = '';
  isTranslated = false;
  isShow = false;
  languages = [];
  selectedLangIn: String = '';
  selectedLangOut: String = '';

  constructor(private _google: GoogleService) { }

  ngOnInit(): void {
    this.languages = [
      { value: "", text: "Please select an option" },
      { value: "ar", text: "Arabic" },
      { value: "cs", text: "Czech" },
      { value: "zh", text: "Chinese" },
      { value: "en", text: "English" },
      { value: "fr", text: "French" },
      { value: "de", text: "German" },
      { value: "it", text: "Italian" },
      { value: "ja", text: "Japanese" },
      { value: "pt", text: "Portuguese" },
      { value: "ru", text: "Russian" },
      { value: "es", text: "Spanish" },
      { value: "tr", text: "Turkish" }
    ];

    this.selectedLangIn = '';
    this.selectedLangOut = '';
    this.googleObj.q = '';
  }

  send() {
    this.googleObj.source = String(this.selectedLangIn);
    this.googleObj.target = String(this.selectedLangOut);
    this._google.translate(this.googleObj).subscribe(
      (res: any) => {
        this.result = res.data.translations[0].translatedText;
        console.log(this.result);
        this.isTranslated = true;
        return this.result;

      },
      err => {
        console.log(err);
      }
    );
  };

  save(){
    let data = {"langIn": this.googleObj.source, "langOut": this.googleObj.target, "source": this.googleObj.q, "target": this.result};
    let x = Math.round(Math.random()*100);
    localStorage.setItem(String(x), JSON.stringify(data))
    this.isShow = true;
    setInterval(()=>{
      this.isShow = false;
    }, 3000)
  };
}
