/**
 * User Model
 * Handles all user-related data operations
 * Acts as a wrapper around database methods for user collection
 */

const db = require("../db");

// Helper functions for user CRUD operations
function getAllUsers() {
  return db.getAllUsers();
}

function getUserById(id) {
  return db.getUserById(id);
}

function createNewUser(userData) {
  return db.createUser(userData);
}

function updateExistingUser(id, updates) {
  return db.updateUser(id, updates);
}

function deleteExistingUser(id) {
  return db.deleteUser(id);
}

// Helper function to find user by field
function findUserByField(field, value) {
  return getAllUsers().find((user) => user[field] === value);
}

/**
 * User class - manages user data persistence and retrieval
 */
class User {
  // Retrieve all users from database
  static getAll() {
    return getAllUsers();
  }

  // Retrieve specific user by ID
  static getById(id) {
    return getUserById(id);
  }

  // Create new user with provided data
  static create(userData) {
    return createNewUser(userData);
  }

  // Update user information by ID
  static update(id, updates) {
    return updateExistingUser(id, updates);
  }

  // Delete user by ID
  static delete(id) {
    return deleteExistingUser(id);
  }

  // Find user by email address
  static getByEmail(email) {
    return findUserByField("email", email);
  }

  // Generic find by field method
  static findBy(field, value) {
    return findUserByField(field, value);
  }
}

module.exports = User;
