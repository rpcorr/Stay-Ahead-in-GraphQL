import { Query } from 'mongoose';
import { Contacts } from './dbConnectors';

export const resolvers = {
  Query: {
    getContacts: () => {
      return Contacts.find();
    },
  },

  Mutation: {
    createContact: async (root, { input }) => {
      const newContact = new Contacts({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        company: input.company,
      });

      newContact.id = newContact._id;

      try {
        await newContact.save();
        return newContact;
      } catch (err) {
        throw new Error(`Error saving contact: ${err.message}`);
      }

      // BELOW DID NOT WORK
      //   return new Promise((resolve) => {
      //     newContact.save((err) => {
      //       if (err) reject(err);
      //       else resolve(newContact);
      //     });
      //   });
    },
  },
};
