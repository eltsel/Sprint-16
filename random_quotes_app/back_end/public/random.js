import fs from 'fs';
import { quotesJackHandey } from './quotes.js'


export function newQuote(){
    console.log("newQuote was run form frontEnd.js");
    const randomNumber = Math.floor(Math.random() * quotesJackHandey.length);
    console.log(randomNumber);
    document.getElementById('quoteDisplayField').innerHTML = quotesJackHandey[randomNumber]
}