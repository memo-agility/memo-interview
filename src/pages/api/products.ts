// pages/api/products.ts
import { db, fetchFromDb } from "@/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page = 1, pageSize = 10 } = req.query;

  const pageNumber = parseInt(page as string);
  const size = parseInt(pageSize as string);
  const offset = (pageNumber - 1) * size;

  const products = await fetchFromDb<Product>(
    "SELECT * FROM products LIMIT ? OFFSET ?",
    [size, offset]
  );
  const total = await fetchFromDb<{ count: number }>(
    "SELECT COUNT(*) as count FROM products"
  );

  res
    .status(200)
    .json({
      products,
      total: total[0].count,
      page: pageNumber,
      totalPage: Math.ceil(total[0].count / size),
    });
}
