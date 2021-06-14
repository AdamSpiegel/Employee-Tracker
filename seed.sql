USE employee_trackerDB;

INSERT INTO department (name)
VALUES 
("Management"), ("Sales"), ("Research and Development"), ("Production"), ("Human Resources"), ("Information Technology"), ("Accounting and Finance"), ("Marekting");

INSERT INTO role (title, salary, department_id)
VALUES 
("CEO", 195000, 1),
("sales rep", 66000, 2),
("senior scientist", 125000, 3),
("manufacturing manager", 83000, 4),
("hr recruiter", 53000, 5),
("software engineer", 112000, 6),
("treasurer", 145000, 7),
("marketing analyst", 65000, 8);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Monty", "Burns", 1, NULL),
("Edna", "Krabappel", 2, 15),
("John", "Frink", 3, NULL),
("Homer", "Simspon", 4, 30),
("Ned", "Flanders", 5, 15),
("Seymour", "Skinner", 6, 45),
("Maggie", "Simpson", 7, 45),
("Moe", "Szyslak", 8, 60);