let books = [
    {id: 0, title: "Dune", author: "Frank Herbert"}
];

let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    }
}