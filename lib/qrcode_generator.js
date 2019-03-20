/**
 * QRCodeGenerator 
 */

'use strict';

const QRCode = require('qrcode')

class QRCodeGenerator {

  /**
   * @param {String} url 
   */
  constructor(url) {
    this._url = url;
  }

  /**
   * setup QR Code options
   * https://github.com/soldair/node-qrcode#qr-code-options
   * @return Hash
   */
  options(){
    return {
      width: 250
    }
  }

  /**
   * @return Promise
   */
  generate(){
    return QRCode.toDataURL(this._url, this.options())
  }
}

module.exports = QRCodeGenerator;
