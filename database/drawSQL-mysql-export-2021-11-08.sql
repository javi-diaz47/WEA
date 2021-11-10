CREATE TABLE `Users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `birth` DATE NOT NULL,
    `register_date` DATE NOT NULL,
    `picture` INT NOT NULL,
    `type` INT NOT NULL
);
ALTER TABLE
    `Users` ADD PRIMARY KEY `users_id_primary`(`id`);
CREATE TABLE `Project`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `deadline` DATE NOT NULL,
    `picture` BLOB NOT NULL,
    `owner_id` INT NOT NULL,
    `desc` TEXT NOT NULL,
    `status` INT NOT NULL
);
ALTER TABLE
    `Project` ADD PRIMARY KEY `project_id_primary`(`id`);
CREATE TABLE `Colaborators`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `colaborator_id` INT NOT NULL,
    `project_id` INT NOT NULL
);
ALTER TABLE
    `Colaborators` ADD PRIMARY KEY `colaborators_id_primary`(`id`);
CREATE TABLE `Chat_room`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL
);
ALTER TABLE
    `Chat_room` ADD PRIMARY KEY `chat_room_id_primary`(`id`);
CREATE TABLE `Message`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `chat_room_id` INT NOT NULL,
    `message` TEXT NOT NULL,
    `date` DATE NOT NULL,
    `message_type_id` INT NOT NULL,
    `url` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Message` ADD PRIMARY KEY `message_id_primary`(`id`);
CREATE TABLE `Message_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Message_type` ADD PRIMARY KEY `message_type_id_primary`(`id`);
CREATE TABLE `User_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `User_type` ADD PRIMARY KEY `user_type_id_primary`(`id`);
CREATE TABLE `Project_status`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Project_status` ADD PRIMARY KEY `project_status_id_primary`(`id`);
ALTER TABLE
    `Colaborators` ADD CONSTRAINT `colaborators_project_id_foreign` FOREIGN KEY(`project_id`) REFERENCES `Project`(`id`);
ALTER TABLE
    `Project` ADD CONSTRAINT `project_status_foreign` FOREIGN KEY(`status`) REFERENCES `Project_status`(`id`);
ALTER TABLE
    `Colaborators` ADD CONSTRAINT `colaborators_colaborator_id_foreign` FOREIGN KEY(`colaborator_id`) REFERENCES `Users`(`id`);
ALTER TABLE
    `Project` ADD CONSTRAINT `project_owner_id_foreign` FOREIGN KEY(`owner_id`) REFERENCES `Users`(`id`);
ALTER TABLE
    `Users` ADD CONSTRAINT `users_type_foreign` FOREIGN KEY(`type`) REFERENCES `User_type`(`id`);
ALTER TABLE
    `Message` ADD CONSTRAINT `message_chat_room_id_foreign` FOREIGN KEY(`chat_room_id`) REFERENCES `Chat_room`(`id`);
ALTER TABLE
    `Message` ADD CONSTRAINT `message_message_type_id_foreign` FOREIGN KEY(`message_type_id`) REFERENCES `Message_type`(`id`);

    --@block
    DROP TABLE Project;

