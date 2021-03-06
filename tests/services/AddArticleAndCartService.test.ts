import { AddArticleAndCartService } from "../../src/services/AddArticleAndCartService";
import connection from "../../src/database";
import add_data from "../json/level3/level_3_data.json";
import add_output from "../json/level3/level_3_output.json";
beforeAll(async () => {
  await connection.create();
});

afterAll(async () => {
  await connection.close();
});

it("[AddArticleAndCartService]", async () => {
  const { articles, carts } = add_data;
  const addToCartService = new AddArticleAndCartService();
  const result = await addToCartService.execute({ articles, carts });

  expect(result).toMatchObject(add_output);
});
