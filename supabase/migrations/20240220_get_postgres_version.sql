-- Create a function to get the PostgreSQL version
create or replace function get_postgres_version()
returns text
language sql
security definer
as $$
  select version();
$$;
