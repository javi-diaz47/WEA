SELECT email, password FROM Users
WHERE email='janeDoe@gmail.com'
;

--@block
CREATE TABLE Users(
    id INT AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(120),
    password VARCHAR(120),
    phone VARCHAR(20),
    addrss VARCHAR(60),
    birth DATE,
    register_date Date,
    picture BLOB,
    type_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (type_id) REFERENCES Users_type(id)
);

--@blobk




--@block
INSERT INTO Users(name, type_id)
VALUES(
    'Xi jinping',
    2
);

--@block
SELECT * FROM Users
INNER JOIN Project
;

--@block
SELECT * FROM Users
INNER JOIN Users_type
ON Users.type_id = Users_type.id;

--@block
SELECT * FROM Users
INNER JOIN Users_type
ON Users.type_id = Users_type.id;



--@block
INSERT INTO Users_type(name)
VALUES (
    'Empresa'    
);

--@block
SELECT * FROM Users_type;

--@block
SELECT * FROM Project
INNER JOIN Project_status
INNER JOIN Project_privacy
ON Project_privacy.id = Project.project_privacy_id
;

--@block
SELECT * FROM Project
INNER JOIN Users
ON Users.id = Project.owner_id;

--@block
INSERT INTO Project (name, owner_id, project_status_id, project_privacy_id)
VALUES (
    'Fall of Zeus',
    2,
    1,
    1
);


--@block
CREATE TABLE Project(
    id INT AUTO_INCREMENT,
    name VARCHAR(60),
    start_date Date,
    deadline DATE,
    description TEXT,
    picture BLOB,
    owner_id INT NOT NULL,
    project_status_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES Users(id),
    FOREIGN KEY (project_status_id) REFERENCES Project_status(id)
);
--@block
CREATE TABLE Project_status(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20)
);

--@block
INSERT INTO Project_status(name)
VALUES 
    ('open'),
    ('progress'),
    ('close');

--@block
SELECT * FROM Project_status;

--@block
CREATE TABLE Project_privacy(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20)
);

--@block
ALTER TABLE Project
ADD FOREIGN KEY (project_privacy_id) REFERENCES Project_privacy(id)

--@block
CREATE TABLE Colaborators(
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (project_id) REFERENCES Project(id)

);

--@block
SELECT * FROM Project_privacy;

--@block
INSERT INTO Project_privacy(name)
VALUES 
    ('public'),
    ('privacy');

--@block
SELECT * FROM Project_status
INNER JOIN Project
ON Project.project_status_id = Project_status.id;

--@block
SELECT * FROM Project_status


--@block
SELECT 
    Project.name AS name,
    Project_status.name AS project_status
FROM Users
INNER JOIN Colaborators
INNER JOIN Project
INNER JOIN Project_status
ON Users.id = Colaborators.user_id
AND Project.id = Colaborators.project_id
AND Project.project_status_id = Project_status.id
AND Users.id = 1;

--@block
SELECT * FROM Project;