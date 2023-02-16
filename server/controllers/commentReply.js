// const { CommentReply, User, Comment, Post } = require("../orm");

// module.exports = {
//     getAllCommentReplys: async (req, res) => {
//         try {
//           const commentReply = await CommentReply.findAll({
//             where: { commentId: req.params.id },
//             order: [["createdAt", "ASC"]],
//             attributes: { exclude: ['commentReplyId'] },
//             include: [{ model: User, as: "user", attributes: ["fullname"] },
//         {model: C}],
//           });
//           res.status(200).json(commentReply);
//         } catch (error) {
//           res.status(500).send("Failed to load resource");
//         }
//       },
//     addCommentReply: async (req, res) => {
//         try {
//           const commentReply = await CommentReply.create(req.body);
//           res.status(201).json(CommentReply);
//         } catch (error) {
//           res.status(409).send(error);
//         }
//       },
//       deleteCommentReply: async (req, res) => {
//         try {
//           const commentReply = await CommentReply.destroy({
//             where: {commentReplyId: req.params.id},
//           });
//           res.status(201).json(CommentReply);
//         } catch (error) {
//           res.status(409).send(error);
//         }
//       },
//       updateCommnetReply: async (req, res) => {
//         try {
//           const commentReply = await CommentReply.update({
//             where: {commentReplyId: req.params.id},
//           }, req.body);
//           res.status(201).json(CommentReply);
//         } catch (error) {
//           res.status(409).send(error);
//         }
//       },

// }
