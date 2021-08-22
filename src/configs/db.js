module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'nestjs-template',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};
