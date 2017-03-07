# Node send file via SFTP

Simple test node app for sending a file via SFTP.

Requires an SFTP running to connect to (not default mac which uses keyboard-interactive login).

To run:

```
npm install

export SFTP_HOST='localhost'
export SFTP_PORT='2222'
export SFTP_USER='foo'
export SFTP_PASSWORD='pass'

npm start # will list default dir of SFTP server

```