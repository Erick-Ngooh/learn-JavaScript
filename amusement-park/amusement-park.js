/// <reference path="./global.d.ts" />

import { version } from "core-js";

// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const ObjVisitor = {"name": name, "age": age, "ticketId": ticketId};
  return ObjVisitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor["ticketId"] = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null)
    return 'not sold';
  else if (tickets[ticketId] === undefined)
    return 'unknown ticket id';
  return `sold to ${tickets[ticketId]}`;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}



// let ou const ou var suivit du nom de la variable.

let isCurrentUser;
const  nbrPlayers = 5;
var      userId;


let  user = 5, age = 5, message = 5;
let ok, dac, tu;

console.log(typeof playerID);
playerID = 134856854;
console.log(typeof playerID);

const playerID;
console.log(playerID);

{  
                              //  
  console.log(playerID);      // temporal dead zone ou zone morte temporel
                              //    
  const playerID = 'df45d4f8r';
  console.log(playerID);
}


