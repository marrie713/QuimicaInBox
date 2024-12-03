import postgres from 'postgres'

const sql = postgres('postgres://postgres:senaisp@localhost:5432/QIB', { rejectUnauthorized: false }
);

export default sql 