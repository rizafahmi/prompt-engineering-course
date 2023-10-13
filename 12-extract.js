import { getCompletion } from "./helpers.js";

const text =
  `Baru-baru ini saya membeli Kursi Gaming QuantumGlide Pro, dan setelah menghabiskan beberapa minggu bersamanya, saya sangat senang untuk berbagi pendapat saya. Sebagai penggila game sejati dan seseorang yang menghabiskan berjam-jam di depan meja, menemukan kursi yang tepat sangat penting untuk kenyamanan dan kinerja.

Proses pengiriman berjalan cukup lancar, dan saya mendapatkan pembaruan secara teratur tentang status pengiriman. Kursi ini tiba dengan kemasan yang baik, memastikan semua komponen terlindungi selama pengiriman. Namun, pengiriman memakan waktu satu hari lebih lama dari perkiraan awal. Meskipun bukan masalah besar, jendela pengiriman yang lebih tepat waktu akan lebih dihargai.

Mengatur QuantumGlide bersama-sama sangat mudah. Instruksinya jelas, dan semua alat yang diperlukan disertakan. Desain pintar kursi membuat proses perakitan menjadi mudah, dan saya bisa menggunakannya dalam waktu kurang dari 30 menit.

Meskipun QuantumGlide Pro dihargai di ujung atas spektrum kursi gaming, fitur dan kualitas pembuatannya membenarkan biaya tersebut. Bahan yang digunakan sangat baik, dan jelas terlihat bahwa kursi ini dibuat untuk bertahan lama. Namun, akan bagus melihat beberapa promosi atau diskon sesekali untuk membuatnya lebih terjangkau bagi lebih banyak orang.

Kursi ini mengubah segalanya dalam hal kenyamanan. Desain ergonomis memberikan dukungan pinggang yang luar biasa, dan lengan kursi yang dapat disesuaikan serta fitur reclining membuatnya mudah untuk menemukan posisi yang sempurna untuk sesi gaming atau bekerja yang panjang. Bantalan busa memori terasa mewah, dan kain yang dapat bernapas membuat Anda tetap sejuk, bahkan selama maraton gaming yang intens.

Mengingat kenyamanan, daya tahan, dan fitur Kursi Gaming QuantumGlide Pro, saya yakin ini menawarkan nilai yang sangat baik. Meskipun investasi awal mungkin terlihat tinggi, kualitas pembuatan kursi ini dan pengalaman gaming atau kerja yang lebih baik membuatnya menjadi pembelian yang sangat berharga bagi mereka yang menghabiskan waktu yang lama di depan meja.

Secara keseluruhan, Kursi Gaming QuantumGlide Pro melampaui harapan saya dalam hal kenyamanan dan kualitas pembuatan. Meskipun ada sedikit keterlambatan pengiriman dan titik harga yang agak tinggi, pengalaman dan manfaat keseluruhan membenarkan investasi ini. Jika Anda seorang gamer serius atau seseorang yang menghabiskan banyak waktu di depan meja, QuantumGlide Pro layak dipertimbangkan.`;

const prompt =
  `Your task is to extract relevant information from a product review from an ecommerce site to give feedback to the Shipping department.

From the review below, delimited by triple quotes extract the information relevant to shipping and delivery. Limit to 30 words. Extracted information should be in Bahasa Indonesia.

Review: '''${text}'''
`;

const result = await getCompletion(prompt);
console.log(result);
