'use strict';
const dayjs = require('dayjs');
module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const Comment = app.model.define(
    'comment',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: INTEGER, comment: '评论者' },
      postId: { type: INTEGER, comment: '帖子ID' },
      content: { type: STRING, comment: '内容' },
      reverse1: STRING,
      reverse2: STRING(1000),
      reverse3: STRING(30),
      reverse4: INTEGER,
      reverse5: TEXT,
      reverse6: TEXT('tiny'),

      createdAt: {
        type: DATE,
        get() {
          return dayjs(this.getDataValue('createdAt')).valueOf();
        },
      },
      updatedAt: {
        type: DATE,
        get() {
          return dayjs(this.getDataValue('updatedAt')).valueOf();
        },
      },
      deletedAt: {
        type: DATE,
        get() {
          return dayjs(this.getDataValue('deletedAt')).valueOf();
        },
      },
    },
    {
      paranoid: true,
      underscored: false,
    }
  );
  Comment.sync();
  return Comment;
};
