const fs = require('fs');
const content = 'Más contenido del fichero';
fs.appendFile('test.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('El fichero se ha escrito correctamente');
});
