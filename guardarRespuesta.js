import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { unidad_negocio, area, comentarios, links } = req.body;

    const { error } = await supabase
      .from('respuestas')
      .insert([{ unidad_negocio, area, comentarios, links }]);

    if (error) throw error;

    res.status(200).json({ mensaje: 'Guardado en Supabase con éxito' });
  } catch (error) {
    console.error('Error en API:', error);
    res.status(500).json({ error: 'Error al guardar en Supabase' });
  }
}

