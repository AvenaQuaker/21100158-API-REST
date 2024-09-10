# Restricciones de REST en la Web

REST (Representational State Transfer) es un estilo arquitectónico para diseñar servicios web que fue introducido por Roy Fielding en su tesis doctoral en el año 2000. REST define un conjunto de restricciones para crear sistemas distribuidos escalables, simples y robustos. Estas restricciones son esenciales para que una arquitectura sea considerada RESTful.

## 1. **Arquitectura Cliente-Servidor**

Esta restricción separa las preocupaciones entre el cliente y el servidor. El cliente solicita recursos, mientras que el servidor maneja las solicitudes y responde. Esto permite que ambas partes evolucionen de forma independiente. Las responsabilidades se dividen de la siguiente manera:

-   **Cliente:** Interfaz de usuario o cualquier software que realiza solicitudes HTTP.
-   **Servidor:** Sistema que ofrece recursos y realiza operaciones solicitadas por el cliente.

### Ventajas:

-   Independencia entre cliente y servidor.
-   Mejora la escalabilidad al permitir la evolución de ambos lados.

## 2. **Interfaz Uniforme**

Una interfaz uniforme simplifica y desacopla la arquitectura, lo que permite la interacción independiente entre los componentes. Las siguientes características definen la interfaz uniforme:

-   **Identificación de recursos:** Cada recurso es identificado por una URL única.
-   **Representaciones:** Los recursos se manipulan a través de sus representaciones (JSON, XML, etc.).
-   **Acciones bien definidas:** Uso de métodos HTTP estándar (GET, POST, PUT, DELETE, PATCH).
-   **Sin estado:** Cada solicitud del cliente debe contener toda la información necesaria para que el servidor la procese.

### Ventajas:

-   Facilita la comunicación entre sistemas heterogéneos.
-   Promueve la simplicidad y la interoperabilidad.

## 3. **Comunicación Sin Estado**

Cada solicitud HTTP del cliente al servidor debe ser independiente, es decir, el servidor no mantiene ningún estado del cliente entre solicitudes. Toda la información necesaria para procesar una solicitud debe estar incluida en ella (por ejemplo, autenticación o contexto de sesión).

### Ventajas:

-   Mejora la escalabilidad del servidor.
-   Facilita la recuperación de errores y la redistribución de la carga.

## 4. **Cacheabilidad**

Las respuestas del servidor deben indicar si son o no cacheables para que los clientes puedan almacenar en caché esas respuestas y reutilizarlas para futuras solicitudes. Esto optimiza el rendimiento de la red y reduce la carga en el servidor.

### Ventajas:

-   Mejora la eficiencia al reducir solicitudes repetitivas.
-   Reduce la latencia al permitir el uso de datos almacenados en caché.

## 5. **Sistema en Capas**

El sistema puede estar compuesto de capas que interactúan entre sí. Un cliente no necesariamente interactúa directamente con el servidor final, sino que puede comunicarse con un proxy o un balanceador de carga que luego redirige la solicitud.

### Ventajas:

-   Mejora la escalabilidad.
-   Facilita la implementación de intermediarios como cachés, firewalls o gateways.

## 6. **Código bajo demanda (opcional)**

Esta es una restricción opcional que permite al servidor enviar código ejecutable al cliente (por ejemplo, scripts JavaScript) para extender su funcionalidad.

### Ventajas:

-   Permite extender las capacidades del cliente dinámicamente.

## Conclusión

Las restricciones de REST garantizan que los sistemas distribuidos basados en la web sean escalables, mantenibles y eficientes. Al seguir estas restricciones, es posible crear servicios web que puedan interactuar y evolucionar de forma independiente en un entorno distribuido.

## Referencias

-   Fielding, R. (2000). _Architectural Styles and the Design of Network-based Software Architectures_. University of California, Irvine.
