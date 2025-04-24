export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const datos = req.body;

    console.log("Recibido:", datos);

    // Aquí llamaremos a Supabase
    return res.status(200).json({ mensaje: '¡Datos recibidos correctamente!' });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
