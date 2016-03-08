### Prepare
* have setup `nodejs,bower` environment
* execute `npm install` and `bower install` to download all depended packages
* make sure you have a directory named `json` under the current project. If not, create one

### Usage (command usage)
* execute `node app.js` will start a mock server, then browse the url in browser 
* you can also set default HOST or PORT by input the params. `node app.js -a 192.168.1.1 -p 8088`, `-a` or `-p` is optional , you can use each of them or both . such as `node app.js -a 192.168.1.1` or `node app.js -p 8088`

### Example
* After you have start a mock server, you can see all mock json 
* ADD mock json: click "ADD" button then you will go to add page. If your api is "http://192.168.1.1:8088/getUsers", you may input URL `/getUsers` and JSON value(must be validate json format) and submit
* Modify mock json: you may modify the json value and click `Modify` button to save this change.
* Delete mock json: you may delete a json by clicked `Delete` button
* How to use as server ?  You may use mock server url (such as: http://192.168.1.1:8088/mock/getUsers) in your front-end. `ATTENTTION`: add `mock` before method `getUsers`

### changelog
* v1.0.0 initialized by Will at 2016/03/08
