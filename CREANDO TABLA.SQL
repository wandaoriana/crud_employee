CREATE TABLE Empleados (
    EmpleadosID INT IDENTITY(1,1) PRIMARY KEY,
    EmpleadosName VARCHAR(100) NOT NULL,
    MobileNumber VARCHAR(15) NOT NULL,
    APT VARCHAR(50) NOT NULL,
    Salary DECIMAL(18,2)  NOT NULL
    )
    
    