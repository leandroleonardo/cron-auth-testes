window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.auth = window.blockly.js.blockly.auth || {};
window.blockly.js.blockly.auth.DataBase = window.blockly.js.blockly.auth.DataBase || {};

/**
 * @function CreateDataBase
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 12/09/2024, 09:08:15
 *
 */
window.blockly.js.blockly.auth.DataBase.CreateDataBaseArgs = [];
window.blockly.js.blockly.auth.DataBase.CreateDataBase = async function() {

  //
  this.cronapi.cordova.database.openDatabase('agenda');
}

/**
 * @function CreateTable
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 12/09/2024, 09:08:15
 *
 */
window.blockly.js.blockly.auth.DataBase.CreateTableArgs = [];
window.blockly.js.blockly.auth.DataBase.CreateTable = async function() {

  //
  item = (await this.cronapi.client('cronapi.cordova.database.executeSQL').run('agenda', 'CREATE TABLE PESSOA (idPessoa integer PRIMARY KEY, nome);', null));
}
