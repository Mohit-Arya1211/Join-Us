create table users(
        email varchar(255) primary key,
        created_at TIMESTAMP DEFAULT NOW()
    );