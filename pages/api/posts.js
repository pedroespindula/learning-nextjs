export default function posts(req, res) {
  return res.status(200).json([
    { title: "Post 1", content: "Isso é um teste" },
    { title: "Post 2", content: "Deveria funcionar" },
    { title: "Post 3", content: "Testando next.js" },
  ])
}
