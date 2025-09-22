# Development

Pasos para levantar la app en desarrollo

1. levantar la base de datos

````
docker compose up -d
```

2. Crear una copia del .env.template y renombrar a .env
3. Reemplazar las variables de entorno
4. Instalar dependencias ```npm install```
5. Levantar proyecto ```npm run dev```
6. Ejecutar comandos prisma:
```
npx prisma migrate dev
npx  prisma generate
```
7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed) (en postman)


# Prisma Commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod


# Stage
````
