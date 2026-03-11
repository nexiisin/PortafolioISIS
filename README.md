# Portafolio ISIS

Sitio web personal construido con React + Vite.

## Requisitos

- Node.js 20+
- npm

## Ejecutar en local

```bash
npm install
npm run dev
```

## Configuracion de EmailJS

El formulario de contacto usa EmailJS para enviarte mensajes al correo.

1. Crea una cuenta en EmailJS.
2. Crea un Service y copia el Service ID.
3. Crea un Template y copia el Template ID.
4. Copia tu Public Key desde Account > API Keys.
5. Crea un archivo `.env` en la raiz del proyecto con este contenido:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Tambien puedes usar `.env.example` como referencia.

## Variables de plantilla sugeridas

Con la plantilla que muestras, usa estas variables en EmailJS:

- `{{title}}`
- `{{name}}`
- `{{email}}`
- `{{message}}`

El formulario ya envia esos campos automaticamente.
