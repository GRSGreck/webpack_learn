'use strict';

// const moment = require('moment');
//
// let today = moment(new Date()).locale('ru');
//
// console.log(today.format('DD MMM YYYY'));

// const _ = require('lodash');

let users = [
    { id: 1, name: 'Roman' },
    { id: 2, name: 'Irina' },
    { id: 3, name: 'Artem' }
];

console.log( _.map(users, 'name') );