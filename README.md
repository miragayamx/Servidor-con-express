# Servidor-con-express

>>Consigna:
>>
 
Realizar un proyecto de servidor basado en node.js que utilice el middleware 
express e implemente tres endpoints en el puerto 8080:
1) Ruta get '/items' que responda un objeto con todos los productos y su cantidad total en 
el siguiente formato: { items: [productos], cantidad: (cantidad productos) }
2) Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de 
productos que se encuentran en el archivo 'productos.txt'. El formato de respuesta 
será: { item: {producto} }
3) La ruta get '/visitas' devuelve un objeto que indica cuantas veces se visitó la ruta del 
punto 1 y cuantas la ruta del punto 2. Contestar con el formato: { visitas : { items: 
cantidad, item: cantidad } }
Usar 'productos.txt' del desafío anterior.
 
>>Aclaraciones:
>>
- Utilizar import para importar las dependencias necesarias.
- Representar por consola el puerto de conexión del servidor y mensajes de error si los 
hubiese.
