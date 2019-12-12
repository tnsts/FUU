/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  addTask: function (req, res) {

    var data = {
      title       : req.param("title"),
      description : req.param('description'),
      performer   : req.param('performer'),
      status      : req.param('status'),
      endDate     : req.param('endDate'),
    };

    Task.create(data).exec(function (err, task) {
      if (err) {
        return res.send(500);
      }

      res.redirect('/task');
    });
  },

  deleteTask: function (req, res) {

    var taskId = req.param('id');

    Task.destroy(taskId)
        .exec(function(err) {

          if (err){
            return res.send(500);
          }

          res.redirect('/task');
        });
  },

  index: function (req, res) {
    Task.find()
        .populate('performer')
        .populate('status')
        .sort('id DESC')
        .exec(function (err, tasks) {

          if (err){
            return res.send(500);
          }

          res.view({
            tasks : tasks
          });
        });
  },

  create: function (req, res) {
    var data = {};

    Executor.find()
            .then(function(executors) {

              data.performers = executors;

              Status.find()
                    .then(function(statuses) {
                      data.statuses = statuses;
                      res.view({data : data});
                    });
                  });
    },

  view: function (req, res) {

    var taskId = req.param('id');

    Task.findOne(taskId)
        .populate('performer')
        .populate('status')
        .exec(function (err, task) {

          if (err) {
            return res.send(500);
          }

          res.view({
            task: task
          });
        });
    }
};
