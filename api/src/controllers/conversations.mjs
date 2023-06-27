import Models from '../models/conversation.mjs';

const { discussionSchema, messageSchema } = Models;

const Conversations = class Conversations {
  constructor(app, connect) {
    this.app = app;
    this.ConversationModel = connect.model('Discussion', discussionSchema);
    this.MessageModel = connect.model('Message', messageSchema);
    this.run();
  }

  deleteConversationById() {
    this.app.delete('/conversation/:id', (req, res) => {
      try {
        this.ConversationModel.findByIdAndDelete(req.params.id).then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  deleteMessageById() {
    this.app.delete('/message/:messageId', (req, res) => {
      try {
        this.MessageModel.findByIdAndDelete(req.params.messageId).then((message) => {
          res.status(200).json(message || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] message/:messageId -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  createMessage() {
    this.app.post('/message', async (req, res) => {
      try {
        const messageModel = new this.MessageModel(req.body);

        messageModel.save().then((message) => {
          res.status(200).json(message || {});
        }).catch((e) => {
          res.status(500).json({
            code: 500,
            message: e.message
          });
        });
      } catch (err) {
        console.error(`[ERROR] message/create -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showConversationById() {
    this.app.get('/conversation/:id', (req, res) => {
      try {
        this.ConversationModel.findById(req.params.id).then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  createConversation() {
    this.app.post('/conversation/', (req, res) => {
      try {
        const conversationModel = new this.ConversationModel(req.body);

        conversationModel.save().then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch((e) => {
          res.status(500).json({
            code: 500,
            message: e.message
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/create -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showAllConversation() {
    this.app.get('/conversation', (req, res) => {
      try {
        this.ConversationModel.find().populate('members').then((conversations) => {
          res.status(200).json(conversations || []);
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation -> ${err}`);
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showAllMessageByConversationId() {
    this.app.get('/message/:conversationId', (req, res) => {
      try {
        this.MessageModel.find().populate({
          path: 'fromDiscussion',
          match: { _id: req.params.conversationId },
          select: 'name'
        })
          .then((messages) => messages.filter((message) => message.fromDiscussion !== null))
          .then((messages) => {
            res.status(200).json(messages || []);
          })
          .catch(() => {
            res.status(500).json({
              code: 500,
              message: `Internal Server error + ${res}`
            });
          });
      } catch (err) {
        console.error(`[ERROR] message/:conversationId -> ${err}`);
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  updateConversation() {
    this.app.put('/conversation/:id', (req, res) => {
      try {
        const { id } = req.params;
        const {
          name,
          icon
        } = req.body;
        if (typeof name !== 'string' || typeof icon !== 'string') {
          res.status(400).json({ status: 'error' });
          return;
        }
        this.ConversationModel.findByIdAndUpdate(id, {
          name,
          icon
        }).then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  updateMessage() {
    this.app.put('/message/:id', (req, res) => {
      try {
        const { id } = req.params;
        const {
          content
        } = req.body;
        if (typeof content !== 'string') {
          res.status(400).json({ status: 'error' });
          return;
        }
        this.MessageModel.findByIdAndUpdate(id, {
          content
        }).then((message) => {
          res.status(200).json(message || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] message/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  addMemberToConversation() {
    this.app.put('/conversation/:id/addMember', (req, res) => {
      try {
        const { id } = req.params;
        const {
          memberId
        } = req.body;
        this.ConversationModel.findByIdAndUpdate(id, {
          $addToSet: {
            members: memberId
          }
        }).then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/:id/addMember -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  removeMemberFromConversation() {
    this.app.put('/conversation/:id/removeMember', (req, res) => {
      try {
        const { id } = req.params;
        const {
          memberId
        } = req.body;
        this.ConversationModel.findByIdAndUpdate(id, {
          $pull: {
            members: memberId
          }
        }).then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/:id/removeMember -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  run() {
    this.createConversation();
    this.showConversationById();
    this.deleteConversationById();
    this.deleteMessageById();
    this.createMessage();
    this.showAllConversation();
    this.showAllMessageByConversationId();
    this.updateConversation();
    this.updateMessage();
    this.addMemberToConversation();
    this.removeMemberFromConversation();
  }
};

export default Conversations;
