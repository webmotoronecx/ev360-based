import { defineType, defineField } from "sanity";

/**
 * siteSettings — singleton doc. Holds global branding, nav, primary CTA, logo.
 *
 * "Singleton" = only one instance; the Studio prevents creating more.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "brand", title: "Brand" },
    { name: "nav", title: "Navigation" },
    { name: "meta", title: "Metadata" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Site name",
      type: "string",
      group: "meta",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "meta",
    }),
    defineField({
      name: "description",
      title: "Meta description",
      type: "text",
      rows: 2,
      group: "meta",
    }),
    defineField({
      name: "logo",
      title: "Logo (white/light version for dark nav)",
      type: "image",
      group: "brand",
      options: { hotspot: false },
    }),
    defineField({
      name: "logoAlt",
      title: "Logo alt text",
      type: "string",
      group: "brand",
    }),
    defineField({
      name: "nav",
      title: "Primary navigation links",
      type: "array",
      group: "nav",
      of: [
        {
          type: "object",
          name: "navLink",
          fields: [
            { name: "label", title: "Label", type: "string", validation: (r) => r.required() },
            { name: "href", title: "Link (e.g. /services)", type: "string", validation: (r) => r.required() },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA (header button)",
      type: "object",
      group: "nav",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "href", title: "Link", type: "string" },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
