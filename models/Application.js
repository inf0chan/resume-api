/**
 * Application Model
 * Tracks job applications submitted by users
 * Provides methods to manage application records
 */

const db = require("../db");

// Helper functions for application CRUD operations
function getAllApplications() {
  return db.getAllApplications();
}

function getApplicationById(id) {
  return db.getApplicationById(id);
}

function createNewApplication(applicationData) {
  return db.createApplication(applicationData);
}

function updateExistingApplication(id, updates) {
  return db.updateApplication(id, updates);
}

function deleteExistingApplication(id) {
  return db.deleteApplication(id);
}

// Helper function to find applications by field
function findApplicationsByField(field, value) {
  return getAllApplications().filter((app) => app[field] === value);
}

/**
 * Application class - manages job application tracking
 */
class Application {
  // Get all applications
  static getAll() {
    return getAllApplications();
  }

  // Get application by ID
  static getById(id) {
    return getApplicationById(id);
  }

  // Create new application record
  static create(applicationData) {
    return createNewApplication(applicationData);
  }

  // Update application by ID
  static update(id, updates) {
    return updateExistingApplication(id, updates);
  }

  // Delete application by ID
  static delete(id) {
    return deleteExistingApplication(id);
  }

  // Get all applications for specific user
  static getByUserId(userId) {
    return findApplicationsByField("userId", userId);
  }

  // Generic find by field method
  static findBy(field, value) {
    return findApplicationsByField(field, value);
  }
}

module.exports = Application;
