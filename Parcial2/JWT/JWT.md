# JSON Web Token (JWT)

## ¿Qué es un JWT?

Un **JSON Web Token (JWT)** es un estándar abierto (RFC 7519) que define una forma compacta y segura de transmitir información entre dos partes en formato **JSON**. Este token está firmado de forma digital, lo que garantiza que la información contenida sea verificable y confiable.

## Propósito

Los JWT se utilizan principalmente para autenticar y autorizar usuarios en aplicaciones web o móviles. A diferencia de las sesiones tradicionales que dependen de almacenar el estado en el servidor, los JWT permiten un enfoque sin estado ("stateless"), donde toda la información necesaria está dentro del token.

## Estructura de un JWT

Un JWT consta de tres partes separadas por puntos (`.`):

1. **Header** (Encabezado)
2. **Payload** (Cuerpo)
3. **Signature** (Firma)

### 1. Header (Encabezado)

El encabezado del JWT típicamente contiene dos partes:

-   **Tipo de token**, que es "JWT".
-   **Algoritmo de firma**, como HMAC SHA256 o RSA.

Ejemplo:

```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

### 2. Payload (Cuerpo)

El cuerpo o payload contiene las claims (afirmaciones), que son las declaraciones sobre una entidad (generalmente el usuario) y algunos datos adicionales. Existen tres tipos de claims:

-   **Registered claims**: Son claims reservados y estándar, como iss (emisor), exp (expiración), sub (sujeto), y aud (audiencia). Estos son opcionales.
-   **Public claims**: Claims definidos por los usuarios, que pueden ser utilizados en cualquier contexto, pero deben ser únicos y bien definidos.
-   **Private claims**: Claims personalizados entre las partes que intercambian el token

{
"sub": "1234567890",
"name": "John Doe",
"admin": true
}

### 3. Signature (Firma)

La firma asegura que el token no ha sido alterado. Para crear la firma se toman las dos partes codificadas (header y payload), se combinan y se les aplica el algoritmo especificado en el encabezado junto con una clave secreta (o una clave pública, en el caso de RSA).

HMACSHA256(
base64UrlEncode(header) + "." + base64UrlEncode(payload),
secret
)

# EJEMPLO COMPLETO

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
