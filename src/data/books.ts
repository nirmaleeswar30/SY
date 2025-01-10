import { Book } from '../types/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/great-gatsby.pdf',
    description: 'A story of decadence and excess.',
    genre: 'Classic',
    category: 'English Books'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/to-kill-a-mockingbird.pdf',
    description: 'A story of racial injustice and loss of innocence.',
    genre: 'Classic',
    category: 'English Books'
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/pride-and-prejudice.pdf',
    description: 'A classic romance novel.',
    genre: 'Romance',
    category: 'English Books'
  },
  {
    id: '4',
    title: 'Tamil Pamphlet 1',
    author: 'Author 1',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/tamil-pamphlet-1.pdf',
    description: 'A pamphlet in Tamil.',
    genre: 'Pamphlet',
    category: 'Bhajan Books'
  },
  {
    id: '5',
    title: 'Tamil Book 1',
    author: 'Author 2',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/tamil-book-1.pdf',
    description: 'A book in Tamil.',
    genre: 'Fiction',
    category: 'Tamil Books'
  },
  // Add more books as needed
];
