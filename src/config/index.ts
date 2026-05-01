import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/team-task-manager',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
};

export default config;