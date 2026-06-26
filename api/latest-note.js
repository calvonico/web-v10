export default async function handler(req, res) {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DATABASE_ID = "91b70625-9bb7-4f37-8ebd-8e2206fa834b";

  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_size: 1,
        sorts: [{ property: "Date", direction: "descending" }],
        filter: { property: "Published", checkbox: { equals: true } },
      }),
    }
  );

  const data = await response.json();
  const page = data.results?.[0];

  if (!page) {
    return res.status(404).json({ error: "No notes found" });
  }

  const title = page.properties.Name?.title?.[0]?.plain_text || "";
  const description =
    page.properties.Description?.rich_text?.[0]?.plain_text || "";
  const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || "";

  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).json({ title, description, slug });
}
