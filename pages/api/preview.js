import { createSdk } from "@opendesign/sdk";

export default async (req, res) => {
  const { designId } = req.query;

  const sdk = createSdk({
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzgyOTkwMTQsInYiOjAsImV4cCI6MzMxNjM2NzE4MTQsImlzcyI6ImF2b2NvZGUtbWFuYWdlciIsImQiOnsiaWQiOjEyNzk2MjgsImNvbnRleHQiOiJvZC1hcGkiLCJ0b2tlbl9pZCI6MjE4NTY1NSwiZ3JhbnRfaWQiOjkyODAxMTl9fQ.3f5NGbAqVQstD3dbgpm5m32BU3jG6I1V0sJFC4HNLFI",
    console: { level: "info" },
  });
  const design = await sdk.fetchDesignById(designId);
  const artboards = design.getArtboards();

  // Iterate through all artboards
  await Promise.all(
    artboards.map((artboard) => {
      // Render each artboard and save the PNG to the public folder
      return artboard.renderToFile(`public/${artboard.id}.png`);
    })
  );

  res.status(200).json({ ok: 1 });
};
