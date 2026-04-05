"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

const singletonTypes = ["siteSettings", "hero"];

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singletons
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.listItem()
              .title("Hero Section")
              .id("hero")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.divider(),
            // Regular docs (none yet, placeholder for future)
            ...S.documentTypeListItems().filter(
              (item) => !singletonTypes.includes(item.getId() || "")
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // Prevent creating new singletons
  document: {
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(
            ({ action }) => action && !["delete", "duplicate"].includes(action)
          )
        : input,
  },
});
