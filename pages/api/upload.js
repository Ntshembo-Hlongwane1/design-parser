import { createSdk } from "@opendesign/sdk";

export default async (req, res) => {
  const sdk = createSdk({
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzgyOTkwMTQsInYiOjAsImV4cCI6MzMxNjM2NzE4MTQsImlzcyI6ImF2b2NvZGUtbWFuYWdlciIsImQiOnsiaWQiOjEyNzk2MjgsImNvbnRleHQiOiJvZC1hcGkiLCJ0b2tlbl9pZCI6MjE4NTY1NSwiZ3JhbnRfaWQiOjkyODAxMTl9fQ.3f5NGbAqVQstD3dbgpm5m32BU3jG6I1V0sJFC4HNLFI",
  });

  const design = await sdk.importDesignFile("./tutorial.sketch");

  res.status(200).json({ designId: design.id });
};
