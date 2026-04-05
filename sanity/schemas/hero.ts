import { defineType, defineField } from "sanity";

/**
 * hero — singleton doc for the homepage hero section.
 */
export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "sub",
      title: "Subheading",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "backgroundImage",
      title: "Background image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "theme",
      title: "Nav theme over hero",
      type: "string",
      options: {
        list: [
          { title: "Dark (for light nav text)", value: "dark" },
          { title: "Light (for dark nav text)", value: "light" },
        ],
      },
      initialValue: "dark",
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "href", title: "Link", type: "string" },
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "href", title: "Link", type: "string" },
      ],
    }),
    defineField({
      name: "brandMarqueeEyebrow",
      title: "Brand marquee eyebrow text",
      type: "string",
      description: 'e.g. "Supporting all EV brands"',
    }),
    defineField({
      name: "brandMarqueeBrands",
      title: "Brand marquee logos",
      type: "array",
      of: [
        {
          type: "object",
          name: "brandLogo",
          fields: [
            { name: "name", title: "Brand name", type: "string", validation: (r) => r.required() },
            {
              name: "logo",
              title: "Logo (upload) — OR use URL below",
              type: "image",
            },
            {
              name: "url",
              title: "Logo URL (fallback if no upload)",
              type: "string",
              description: "External URL (e.g. cdn.simpleicons.org)",
            },
            {
              name: "invert",
              title: "Invert colors (for non-white source logos)",
              type: "boolean",
              initialValue: false,
            },
          ],
          preview: {
            select: { title: "name", media: "logo" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero Section" }),
  },
});
