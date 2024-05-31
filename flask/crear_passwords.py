import sqlite3

DATABASE_PATH = '/Users/leolo/OneDrive/Desktop/Ciclo_1/flask/basededatos.db'

# Function to obtain database connection and cursor
def obtener_cursor():
    try:
        conexion = sqlite3.connect(DATABASE_PATH)
        return conexion, conexion.cursor()
    except sqlite3.Error as error:
        print("Error al conectar a la base de datos:", error)
        return None, None

# Create table if it doesn't exist
def crear_tabla():
    crear_tabla_usuarios = '''CREATE TABLE IF NOT EXISTS usuarios (
                                        id INTEGER PRIMARY KEY,
                                        usuario VARCHAR(50),
                                        password VARCHAR(50)
                                    );'''

    conexion, cursor = obtener_cursor()
    if cursor:
        try:
            cursor.execute(crear_tabla_usuarios)
            conexion.commit()
            conexion.close()
            print("Tabla creada correctamente.")
        except sqlite3.Error as error:
            print("Error al crear la tabla:", error)

# Function to add a user
def agregar_usuario(usuario, password):
    if usuario.strip() and password.strip():  # Check if both username and password are not empty
        conexion, cursor = obtener_cursor()
        if cursor:
            try:
                cursor.execute("INSERT INTO usuarios (usuario, password) VALUES (?, ?)", (usuario, password))
                conexion.commit()
                conexion.close()
                print("Usuario agregado correctamente.")
            except sqlite3.Error as error:
                print("Error al agregar el usuario:", error)
    else:
        print("El usuario o la contraseña están vacíos.")

# Initialize table
crear_tabla()

# Example usage:
agregar_usuario("cmueller@metropolitanalaluz.com", "12345")
agregar_usuario("cramirez@metropolitanalaluz.com", "12345")
agregar_usuario("croman@metropolitanalaluz.com", "12345")
agregar_usuario("mvillamil@metropolitanalaluz.com", "12345")
agregar_usuario("jessica@metropolitanalaluz.com", "12345")
agregar_usuario("rmendez@metropolitanalaluz.com", "12345")
agregar_usuario("malagon@metropolitanalaluz.com", "12345")
