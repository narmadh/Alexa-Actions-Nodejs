//Alexa Handlers exporting
//Use this file to scale multiple handlers if that is required in the future

import { ExpressAdapter } from 'ask-sdk-express-adapter';

import handler from './handlers.js'


const skill = handler.create();
const adapter = new ExpressAdapter(skill, false, false);


export default adapter


