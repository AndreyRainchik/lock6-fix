/* Copyright 2018 IBM Corp. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
'use strict'

module.exports = function (app) {
  app.models.Videos.find({}, function(err, result) {
    /*
      There's something wrong with the authentication for this API.
      It's a true enigma.
      I got these credentials from the German office:

      M3 I/8 II/14 III/12 UKW B
      aeybc ciwyg eywqg
    */
    console.log('Available videos:', JSON.stringify(result));
  });
  app.models.Voicemails.find({}, function(err, result) {
    console.log('Available voicemails:', JSON.stringify(result));
  });
}
