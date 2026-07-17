/**
 * Database Module
 * Handles all data persistence operations using JSON file storage
 * Provides CRUD methods for users, documents, templates, and applications
 */

const fs = require("fs");
const path = require("path");

// Path to the JSON data file
const DATA_FILE = path.join(__dirname, "data.json");

/**
 * Database class - manages all data operations
 * Loads data from JSON file on initialization
 * Automatically saves changes to file after each operation
 */
class Database {
  constructor() {
    // Load data from file on initialization
    this.data = this.loadData();
  }

  /**
   * Load data from JSON file
   * Returns default structure if file doesn't exist or is corrupted
   * @returns {Object} Data object with users, documents, templates, applications arrays
   */
  loadData() {
    try {
      const fileData = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(fileData);
    } catch (error) {
      console.error("Error reading database:", error);
      // Return default structure if file doesn't exist
      return {
        users: [],
        documents: [],
        templates: [],
        applications: [],
      };
    }
  }

  /**
   * Save current data to JSON file with formatting
   * @returns {boolean} Success status of save operation
   */
  saveData() {
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(this.data, null, 2));
      return true;
    } catch (error) {
      console.error("Error saving database:", error);
      return false;
    }
  }

  // Helper functions for CRUD operations
  /**
   * Generate next ID for an entity
   * @param {Array} array - Array of entities
   * @returns {number} Next available ID
   */
  generateId(array) {
    return array.length > 0 ? Math.max(...array.map((item) => item.id)) + 1 : 1;
  }

  /**
   * Find item by ID in array
   * @param {Array} array - Array to search
   * @param {number} id - ID to find
   * @returns {Object|undefined} Found item or undefined
   */
  findById(array, id) {
    return array.find((item) => item.id === id);
  }

  /**
   * Update item in array and save
   * @param {Array} array - Array containing item
   * @param {number} id - ID of item to update
   * @param {Object} updates - Object with fields to update
   * @returns {Object|undefined} Updated item or undefined
   */
  updateItem(array, id, updates) {
    const item = this.findById(array, id);
    if (item) {
      Object.assign(item, updates);
      this.saveData();
    }
    return item;
  }

  /**
   * Delete item from array and save
   * @param {Array} array - Array to filter
   * @param {number} id - ID to delete
   */
  deleteItem(array, id) {
    const index = array.findIndex((item) => item.id === id);
    if (index > -1) {
      array.splice(index, 1);
      this.saveData();
    }
  }

  // Users methods
  getAllUsers() {
    return this.data.users;
  }

  getUserById(id) {
    return this.data.users.find((user) => user.id === id);
  }

  createUser(user) {
    const newUser = {
      id: this.generateId(this.data.users),
      ...user,
      createdAt: new Date(),
    };
    this.data.users.push(newUser);
    this.saveData();
    return newUser;
  }

  updateUser(id, updates) {
    return this.updateItem(this.data.users, id, updates);
  }

  deleteUser(id) {
    this.deleteItem(this.data.users, id);
  }

  // Documents methods
  getAllDocuments() {
    return this.data.documents;
  }

  getDocumentById(id) {
    return this.data.documents.find((doc) => doc.id === id);
  }

  createDocument(document) {
    const newDocument = {
      id: this.generateId(this.data.documents),
      ...document,
      createdAt: new Date(),
    };
    this.data.documents.push(newDocument);
    this.saveData();
    return newDocument;
  }

  updateDocument(id, updates) {
    return this.updateItem(this.data.documents, id, updates);
  }

  deleteDocument(id) {
    this.deleteItem(this.data.documents, id);
  }

  // Templates methods
  getAllTemplates() {
    return this.data.templates;
  }

  getTemplateById(id) {
    return this.data.templates.find((template) => template.id === id);
  }

  createTemplate(template) {
    const newTemplate = {
      id: this.generateId(this.data.templates),
      ...template,
      createdAt: new Date(),
    };
    this.data.templates.push(newTemplate);
    this.saveData();
    return newTemplate;
  }

  updateTemplate(id, updates) {
    return this.updateItem(this.data.templates, id, updates);
  }

  deleteTemplate(id) {
    this.deleteItem(this.data.templates, id);
  }

  // Applications methods
  getAllApplications() {
    return this.data.applications;
  }

  getApplicationById(id) {
    return this.data.applications.find((app) => app.id === id);
  }

  createApplication(application) {
    const newApplication = {
      id: this.generateId(this.data.applications),
      ...application,
      createdAt: new Date(),
    };
    this.data.applications.push(newApplication);
    this.saveData();
    return newApplication;
  }

  updateApplication(id, updates) {
    return this.updateItem(this.data.applications, id, updates);
  }

  deleteApplication(id) {
    this.deleteItem(this.data.applications, id);
  }
}

module.exports = new Database();
