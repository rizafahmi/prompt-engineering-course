import { getCompletion } from "./helpers.js";

const text =
  `Baru-baru ini saya membeli Kursi Gaming QuantumGlide Pro, dan setelah menggunakan selama kurang-lebih beberapa minggu, berikut adalah pendapat saya. Sebagai penggila game sejati dan seseorang yang menghabiskan berjam-jam di depan meja, menemukan kursi yang tepat sangat penting untuk kenyamanan dan kinerja.

Proses pengiriman berjalan cukup lancar, dan saya mendapatkan pembaruan secara teratur tentang status pengiriman. Kursi ini tiba dengan kemasan yang baik, memastikan semua komponen terlindungi selama pengiriman. Namun, pengiriman memakan waktu satu hari lebih lama dari perkiraan awal. Meskipun bukan masalah besar, pengiriman yang lebih tepat waktu akan lebih dihargai.

Mengatur QuantumGlide bersama-sama sangat mudah. Instruksinya jelas, dan semua alat yang diperlukan disertakan. Proses perakitan pun cukup mudah, dan saya bisa menggunakannya dalam waktu kurang dari 30 menit.

Meskipun QuantumGlide Pro dihargai dengan harga premium, fitur dan kualitasnya membuat harganya sangat sepadan. Bahan yang digunakan sangat baik, dan jelas terlihat bahwa kursi ini dibuat untuk bertahan lama. Namun, akan menarik melihat beberapa promosi atau diskon sesekali untuk membuatnya lebih terjangkau bagi lebih banyak orang.

Kursi ini luar biasa nyaman. Desain ergonomis memanjakan pinggang, dan lengan kursi yang dapat disesuaikan serta ada fitur untuk membuatnya mudah untuk menemukan posisi yang sempurna untuk sesi gaming atau bekerja dalam waktu panjang. Bantalan busa memori terasa mewah, dan kain yang dapat bernapas membuat Anda tetap sejuk, bahkan selama maraton gaming yang intens.

Mengingat kenyamanan, daya tahan, dan fitur Kursi Gaming QuantumGlide Pro, saya yakin ini menawarkan nilai yang sangat baik. Meskipun investasi awal mungkin terlihat tinggi, kualitas kursi ini dan pengalaman gaming atau kerja yang lebih baik membuatnya menjadi pembelian yang sangat berharga bagi mereka yang menghabiskan waktu yang lama di depan meja.

Secara keseluruhan, Kursi Gaming QuantumGlide Pro melampaui harapan saya dalam hal kenyamanan dan kualitas pembuatan. Meskipun ada sedikit keterlambatan pengiriman dan harga yang agak tinggi, pengalaman dan manfaat keseluruhan membuat investasi menjadi masuk akal. Jika Anda seorang gamer serius atau seseorang yang menghabiskan banyak waktu di depan meja, QuantumGlide Pro layak dipertimbangkan.`;

const prompt =
  `Your task is to generate a short summary of a product review from an ecommerce site to give feedback to the Shipping deparmtment.

Summarize the review below, delimited by triple quote, in at most 30 words, and focusing on any aspects that mention shipping and delivery of the product. Summarize should in Bahasa Indonesia.

Review: '''${text}'''
`;

const result = await getCompletion(prompt);
console.log(result);
