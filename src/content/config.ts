// src/content/config.ts
// Définition des Content Collections Astro 5
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Collection de type "content" : fichiers MDX/MD dans src/content/blog/
  type: 'content',
  schema: z.object({
    /** Titre affiché en H1 et dans les cartes */
    title: z.string(),
    /** Description courte pour les métas et les cartes */
    description: z.string(),
    /** Date de publication (format ISO : YYYY-MM-DD) */
    pubDate: z.coerce.date(),
    /** URL de l'image à la une (optionnel) */
    heroImage: z.string().optional(),
    /** Liste de tags pour le filtrage et l'affichage (optionnel) */
    tags: z.array(z.string()).optional(),
    /** Si true, l'article ne sera pas publié dans le build */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
