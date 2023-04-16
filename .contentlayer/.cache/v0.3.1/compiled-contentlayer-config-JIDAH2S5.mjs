// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.md",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "boolean" },
    // will be shown in home
    highlight: { type: "boolean" },
    // shown at project list frontpage
    featured: { type: "boolean" },
    stacks: { type: "list", of: { type: "string" } },
    projectLink: { type: "string" },
    thumbnail: { type: "string" }
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.md|\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Project]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JIDAH2S5.mjs.map
