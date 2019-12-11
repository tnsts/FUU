/**
 * executorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  addExecutor: function (req, res) {

        var data = {
            mail           : req.param('mail'),
            executorName        : req.param('executorName'),
            phone           : req.param('phone')
        };

        Executor.create(data).exec(function (err, executor) {

            res.redirect('/executor');

            if (err) {
                return res.send(500);
            }

        });

    },

    updateExecutor: function (req, res) {

        var executorId = req.param('id');

        var updatedData = {
            executorName        : req.param('executorName'),
            phone           : req.param('phone'),
        };

        Executor.update(executorId, updatedData).exec(function (err) {

            if (err) {
                return res.send(500);
            }

            res.redirect('/executor');
        });
    },

    deleteExecutor: function (req, res) {

        var executorId = req.param('id');

        Executor.destroy(executorId).exec(function (err) {

            if (err) return res.send(500);

            res.redirect('/executor');

        });

    },

    index: function (req, res) {

        Executor.find()
            .sort('id DESC')
            .exec(function (err, executors) {

                if (err) {
                    return res.send(500)
                };

                res.view({
                    executors: executors
                });

            });

    },

    create: function(req, res) {

        res.view();
    },

     view: function (req, res) {

        var executorId = req.param('id');

        Executor.findOne(executorId).exec(function (err, executor) {

            if (!executor) {
                return res.send(404);
            };

            if (err) {
                return res.send(500);
            };

            res.view({
                executor: executor
            });

        });

    },


};
