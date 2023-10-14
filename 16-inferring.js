import { getCompletion } from "./helpers.js";

const text =
  `Jadi, butuh lampu keren buat kamar, dan yang ini punya tempat penyimpanan ekstra dan harganya nggak terlalu tinggi. Nyampe cepet banget. Tali lampunya putus pas dikirim, tapi perusahaannya dengan senang hati kirim yang baru. Datengnya juga cuma dalam beberapa hari. Gampang banget ngerakitnya. Ada bagian yang kurang, jadi aku kontak bantuan pelanggan mereka, dan dengan cepat mereka kirimin bagian yang hilang! Aladin keliatannya emang perusahaan keren yang peduli sama pelanggan dan produk mereka!!`;

const prompt = `Identify the following items from the review text:
- Item purchased by reviewer
- Company that made the item

The review is delimited with triple quotes. Format your response as a JSON object with "item" and "brand" as the keys. If the information isn't present, use "unknown" as the value. Make your response as short as possible.

Review: '''${text}'''
`;

const result = await getCompletion(prompt);
console.log(result);
