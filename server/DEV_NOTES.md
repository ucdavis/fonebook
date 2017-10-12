Environment Variables Required
==============================
FONEBOOK_DB_PASSWORD set to database password
Currently assumes 'root' @ 'localhost' for MySQL

Making Requests
===============
For some reason, you must specify the "Content-Type: application/json" header to have valid parsing.

Changing the database (database migrations)
===========================================
1. Generate a migration: db-migrate create what_migration_does --sql-file
