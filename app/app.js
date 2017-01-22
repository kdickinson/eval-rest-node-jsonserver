/*eslint-env node*/
// TODO: more refactoring to different files
(function () {
  'use strict';
  var express = require('express');
  var app = express();
  var Promise = require('bluebird');
  var rp = require('request-promise');
  var _ = require('lodash');

  var getFilteredQuestions = function(questions){
    return _.chain(questions)
            .sampleSize(4)
            .each(function(q){
              q.distractors = _.shuffle(q.distractors);
              return q;
            })
            .value();
  };

  var getQuestions = function () {
    // currently using json-server for fake database
    // TODO: create data repository object to facilitate swapping out database and put database in separate project
    var options = {
      uri:'http://localhost:3004/questions',
      json:true,
      transform: getFilteredQuestions
    };
    return rp(options)
    .then(function(res){
      return res;
    })
    .catch(function(err){
      return err;
    })
  };

  app.get('/', function (req, res) {
    Promise.try(getQuestions)
    .then(function(questions){
      res.send(questions);
    }).catch(function(){
      res.send('Error');
    });
  });

  app.listen(3000, function () {
    console.log('Test Data REST Service listening on port 3000');
  });
})();
