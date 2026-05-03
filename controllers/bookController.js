const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/books.json");


//Read BOOKS

const getBooksData = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};


//Write BOOKS

const saveBooksData = (books) => {
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
};


//Get all BOOKS

exports.getAllBooks = (req, res) => {
    const books = getBooksData();
    res.status(200).json(books);
};


//Get single BOOK

exports.getBookById = (req, res) => {
    const books = getBooksData();

    const book = books.find(
        (b) => b.id.toString() === req.params.id
    );

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }
    res.status(200).json(book);
};


//Add new BOOK

exports.addBook = (req, res) => {
    const books = getBooksData();

    const newBook = {
        id: Date.now(),
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        category: req.body.category
    };

    books.push(newBook);
    saveBooksData(books);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
};


//Update BOOK

exports.updateBook = (req, res) => {
    const books = getBooksData();

    const index = books.findIndex(
        (b) => b.id.toString() === req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books[index] = {
        ...books[index],
        ...req.body
    };

    saveBooksData(books);

    res.status(200).json({
        message: "Book updated successfully",
        book: books[index]
    });
};


//Delete BOOK

exports.deleteBook = (req, res) => {
    const books = getBooksData();

    const filteredBooks = books.filter(
        (b) => b.id.toString() !== req.params.id
    );

    if (books.length === filteredBooks.length) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    saveBooksData(filteredBooks);

    res.status(200).json({
        message: "Book deleted successfully"
    });
};


//Search BOOKS

exports.searchBooks = (req, res) => {
    const books = getBooksData();

    const keyword = req.query.q?.toLowerCase() || "";

    const results = books.filter((book) =>
        book.title.toLowerCase().includes(keyword)
    );

    res.status(200).json(results);
}