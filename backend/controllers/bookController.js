import Book from "../modals/bookSchema.js";

// * @desc    get all books
// * @route   get /books/
// * @access  Public
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ books: books });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

// * @desc    post a books
// * @route   post /book/
// * @access  private(only by admin)

export const registerABook = async (req, res) => {
  try {
    const { name, author, payAmount, rentAmount, imageUrl } = req.body;

    await Book.create({ name, author, payAmount, rentAmount, imageUrl });
    return res.status(201).json({ message: "Successfully created the book" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
