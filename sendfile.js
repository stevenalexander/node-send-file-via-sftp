var host = process.env.SFTP_HOST
var port = process.env.SFTP_PORT
var user = process.env.SFTP_USER
var password = process.env.SFTP_PASSWORD

var Client = require('ssh2').Client

var conn = new Client()
conn
  .on('ready', function () {
    console.log('Client :: ready')
    conn.sftp(function (err, sftp) {
      if (err) throw err
      sftp.readdir('.', function (err, list) {
        if (err) throw err
        console.dir(list)
        conn.end()
      })
    })
  })
  .connect({
    host: host,
    port: port,
    username: user,
    password: password
  })
