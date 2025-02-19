CREATE TABLE Pigeons (
    id SERIAL PRIMARY KEY,
    image_path VARCHAR(255),
    name VARCHAR(255),
    price DECIMAL(10, 2),
    pigeon_name VARCHAR(255),
    description TEXT
);


-- Example 1: Black pigeon
INSERT INTO Pigeons (image_path, name, price, pigeon_name)
VALUES ('images/black.jpg', 'black', 15.00, 'Clóvis');

-- Example 2: Grey pigeon
INSERT INTO Pigeons (image_path, name, price, pigeon_name)
VALUES ('images/grey.png', 'grey', 42.00, 'Carlitos');

-- Example 3: Brown pigeon
INSERT INTO Pigeons (image_path, name, price, pigeon_name)
VALUES ('images/brown.jpeg', 'brown', 38.00, 'Cleitin');

-- Example 4: White pigeon
INSERT INTO Pigeons (image_path, name, price, pigeon_name)
VALUES ('images/white.gif', 'white', 15.00, 'Cléber');
