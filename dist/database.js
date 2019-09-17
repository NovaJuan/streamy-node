"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

function connectDB() {
  if (process.env.DATABASE_URL) {
    console.log('ok');
    var pool = new _pg.Pool({
      connectionString: process.env.DATABASE_URL
    });
    return pool;
  } else {
    var _pool = new _pg.Pool({
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE
    });

    return _pool;
  }
}

var _default = connectDB;
exports["default"] = _default;