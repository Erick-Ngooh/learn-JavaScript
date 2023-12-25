//// 1 - une variable const ne peut pas etre declaré sans etre initialisé au même moment.
//const playerID;
//console.log(playerID);
//// <- output ->
//// Uncaught SyntaxError: Missing initializer in const declaration
//
//const playerID = 'df45d4f8r';
//console.log(playerID);
//// <- output ->
//// VM280:4 df45d4f8r
//
//----------------------------------------------------------------------------------------------------------------------
//
//// 2 - Une variable const ne peut pas être réaffectée avec une nouvelle valeur après sont l'initialisation.
//const playerID = 'df45d4f8r';
//console.log(playerID);
//
//playerID = 'fd85t1h9f';
//console.log(playerID)
//// <- output ->
//// VM313:2 df45d4f8r
//// VM313:4 Uncaught TypeError: Assignment to constant variable.
////    at <anonymous>:4:10
//
//----------------------------------------------------------------------------------------------------------------------
//
//// 3 - Les variable déclarer en const ont une portée de bloc tout comme let
//{
//  const playerID = 'df45d4f8r';
//  console.log(playerID);
//}
//console.log(playerID);
//// <- output ->
//// VM346:3 df45d4f8r
//// VM346:5 Uncaught ReferenceError: playerID is not defined
////    at <anonymous>:5:13
//
//----------------------------------------------------------------------------------------------------------------------
//
//// 4 - une variable const n'est pas accessibles avant d'être déclarées (zone morte temporelle). Elle est considérées comme non hissées.
//                                           //  
//  console.log(playerID);      // temporal dead zone ou zone morte temporel
//                                           //   
//  const playerID = 'df45d4f8r';
//  console.log(playerID);
//// <- output ->
//// VM407:2 Uncaught ReferenceError: playerID is not defined
////    at <anonymous>:2:15


const NUMBER_CLIENT = 35000;
const clientID = Math.random() * 10 + NUMBER_CLIENT;
console.log(NUMBER_CLIENT);
console.log(clientID);


/**
 * 
 * 
 * Dans un contexte d'un  travail d'équipe on devrait nommer les variable;
Selon une convention de nommage etablie aux début du projet.
Cela permet de rendre le code plus claire et comphréensible pour l'ensemble des membre de l'equipe.
 */

/**
 * 2: Comment devriez-vous nommer une variable dans le contexte d'un travail équipe ?
 */