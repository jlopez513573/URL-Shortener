## Notas

- Se decide usar redirecciones y flash messages, en vez de configurar una REST API, esto llevaria a un mayor tiempo de desarrollo, y una mayor complejidad en el desarrollo del front, ya que debia hacer todo el codigo de conexion al API manualmente.
- Aunque esto no permite una mayor modularidad del codigo, para que en el futuro pueda seguir expandiendose, y agregandose nuevas funcionalidades.
- Personalmente prefiero una arquitectura de REST API ya que esto permite tener una mejor independencia entre el backend y el frontend. Por razones de tiempo, no segui con esta idea inicial y decidi hacerlo con los endpoints configurados en el archivo server.ts

## Known issues

- La funcion para validar que las URL sean correctas, permite que el string pueda llegar a no tener la seccion del protocolo HTTP
- Se necesita una mejor manera de mockear la base de datos SQLite.
- De acuerdo a la documentacion de TypeORM no es posible hacer unit tests de los QueryBuilders, una parte muy importante de la aplicacion ya que es ahi donde esta la mayor parte de la logica de la aplicacion.

## Posibles mejoras

- La base de datos SQLite tiene algunas limitaciones para llevar a cabo los tests unitarios y de integracion de una buena manera, propondria cambiar la base de datos a una mas robusta y con mejores APIs que permitan una mayor y mejor configuracion.
