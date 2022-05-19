import { stringConstants } from "../app/common/constants";
import sampleModule from '../app/modules/sampleModule';
const path = require('path');


module.exports = (app) => {

    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));
    app.get('/.wellknown/stellar.toml', (req, res, next) => {
        const options = {
          root: path.join(__dirname, '../public'),
          headers: {
            "content-type": "text/plain",
            "Access-Control-Allow-Origin": "*"
          }
        }
        res.sendFile('stellar.txt', options);
      })
};