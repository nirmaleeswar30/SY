import { Book } from '../types/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/great-gatsby.pdf',
    description: 'A story of decadence and excess.',
    genre: 'Classic'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/to-kill-a-mockingbird.pdf',
    description: 'A story of racial injustice and loss of innocence.',
    genre: 'Classic'
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/books/pride-and-prejudice.pdf',
    description: 'A classic romance novel.',
    genre: 'Romance'
  },
  // Add more books as needed
];