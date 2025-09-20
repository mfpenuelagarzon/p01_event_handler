import express from 'express';
import { Advertiser, Database, Role } from 'marketing-request-database-lib';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  Database.init({
    host: 'localhost',
    database: 'marketing_request_db',
    port: 3306,
    username: 'marketing_user',
    password: 'MarketingApp25@',
    dialect: "mysql"
  });
  Database.getConnection();
  const roles = await Role.findAll();
  console.log("ROLES: ", roles);
  res.status(200).json(roles).end();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});