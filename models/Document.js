/**
 * Document Model
 * Manages resume documents and related data operations
 * Provides methods for document CRUD and user-specific queries
 */

const db = require("../db");

// Helper functions for document CRUD operations
function getAllDocuments() {
  return db.getAllDocuments();
}

function getDocumentById(id) {
  return db.getDocumentById(id);
}

function createNewDocument(documentData) {
  return db.createDocument(documentData);
}

function updateExistingDocument(id, updates) {
  return db.updateDocument(id, updates);
}

function deleteExistingDocument(id) {
  return db.deleteDocument(id);
}

// Helper function to find documents by field
function findDocumentsByField(field, value) {
  return getAllDocuments().filter((doc) => doc[field] === value);
}

/**
 * Document class - handles resume document persistence
 */
class Document {
  // Get all documents
  static getAll() {
    return getAllDocuments();
  }

  // Get document by ID
  static getById(id) {
    return getDocumentById(id);
  }

  // Create new document
  static create(documentData) {
    return createNewDocument(documentData);
  }

  // Update document by ID
  static update(id, updates) {
    return updateExistingDocument(id, updates);
  }

  // Delete document by ID
  static delete(id) {
    return deleteExistingDocument(id);
  }

  // Get all documents for specific user
  static getByUserId(userId) {
    return findDocumentsByField("userId", userId);
  }

  // Generic find by field method
  static findBy(field, value) {
    return findDocumentsByField(field, value);
  }
}

module.exports = Document;
