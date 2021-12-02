import { createSdk } from "@opendesign/sdk";

export default async (req, res) => {
  // Instantiate the SDK
  const sdk = createSdk({
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzgyOTkwMTQsInYiOjAsImV4cCI6MzMxNjM2NzE4MTQsImlzcyI6ImF2b2NvZGUtbWFuYWdlciIsImQiOnsiaWQiOjEyNzk2MjgsImNvbnRleHQiOiJvZC1hcGkiLCJ0b2tlbl9pZCI6MjE4NTY1NSwiZ3JhbnRfaWQiOjkyODAxMTl9fQ.3f5NGbAqVQstD3dbgpm5m32BU3jG6I1V0sJFC4HNLFI",
  });

  // Read the `designId` parameter from the query
  const { designId } = req.query;

  // Get the design using its ID from the previous section
  const design = await sdk.fetchDesignById(designId);

  // Get all Pages in the design
  const pages = design.getPages();

  // Send this list of Pages back to the client as a JSON response
  res.status(200).json(pages);
};
