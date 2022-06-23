import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor () { }

  logInfo (info: string) {
    console.info(info)
  }

  logError (errorMsg: string) {
    console.error(errorMsg)
  }
}
