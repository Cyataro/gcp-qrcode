'use strict';

const QRCodeGenerator = require('./lib/qrcode_generator');

exports.generate = (req, res) => {
  const code = req.query.code || req.body.code || 'Hello World!';
  const g = new QRCodeGenerator(code)
  // console.log(res.header({"Content-Type": "image/png"}))
  g.generate().then(url =>
    res.status(200).header({"Content-Type": "text/html"}).send(`
    <!doctype html>
    <head>
      <title>QR code</title>
    </head>
    <body>
      <p>${code}</p>
      <img src="${url}">
    </body>
    </html>`)
  )
  .catch(err => 
    res.status(500).header({"Content-Type": "application/json"}).send({"err": "error"})
  )
};
