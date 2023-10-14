import { getCompletion } from "./helpers.js";

const text =
  `Jadi, butuh lampu keren buat kamar, dan yang ini punya tempat penyimpanan ekstra dan harganya nggak terlalu tinggi. Nyampe cepet banget. Tali lampunya putus pas dikirim, tapi perusahaannya dengan senang hati kirim yang baru. Datengnya juga cuma dalam beberapa hari. Gampang banget ngerakitnya. Ada bagian yang kurang, jadi aku kontak bantuan pelanggan mereka, dan dengan cepat mereka kirimin bagian yang hilang! Aladin keliatannya emang perusahaan keren yang peduli sama pelanggan dan produk mereka!!`;

const prompt =
  `What is the sentiment of the following product review, which is delimited with triple quote? Use JSON format with the following keys: result.

Review: '''${text}'''
`;

const result = await getCompletion(prompt);
console.log(result);
