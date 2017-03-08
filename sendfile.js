var host = process.env.SFTP_HOST
var port = process.env.SFTP_PORT
var user = process.env.SFTP_USER
var password = process.env.SFTP_PASSWORD

var config = {
  host: host,
  port: port,
  username: user,
  password: password
}

var SFTPClient = require('sftp-promises')
var sftp = new SFTPClient(config)

sftp
  .put('test.csv', './upload/test.csv')
  .then(function () {
    return sftp.ls('./upload').then(function (list) { console.log(list) })
  })
