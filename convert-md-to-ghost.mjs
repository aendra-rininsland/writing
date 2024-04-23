import * as fs from "fs";
import * as glob from "glob";
import fm from "front-matter";
import { basename } from "path";

const files = glob.sync("./_posts/*.md");

const output = [];

for (const file of files) {
  const postRaw = fs.readFileSync(file, "utf-8");
  const { attributes: meta, body } = fm(postRaw);
  const mobiledoc = JSON.stringify({
    version: "0.3.1",
    markups: [],
    atoms: [],
    cards: [["markdown", { cardName: "markdown", markdown: body }]],
    sections: [[10, 0]],
  });
  const [slug] = (meta && meta.path ? meta.path : basename(file, ".md"))
    .split("/")
    .reverse();
  const pubDate = new Date(meta.date);
  const post = {
    url: `https://aendra.com/${meta.path || `content/${slug}`}`,
    data: {
      slug,
      title: meta.title,
      mobiledoc,
      status: "published",
      published_at: pubDate,
      author: {
        url: "/author/me",
        data: {
          email: "howdy@aendra.com",
          name: "Ændra Rininsland",
          slug: "me",
          roles: ["Editor"],
        },
      },
      email_only: false,
      tags: [
        {
          url: `archive-content`,
          data: {
            name: `#archive`,
            slug: `hash-archive`,
          },
        },
      ],
    },
  };

  output.push(post);
}

fs.writeFileSync("./ghost.json", JSON.stringify(output), "utf-8");
