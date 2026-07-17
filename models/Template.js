/**
 * Template Model
 * Manages resume templates for users to choose from
 * Provides CRUD operations for template management
 */

const db = require("../db");

// Helper functions for template CRUD operations
function getAllTemplates() {
  return db.getAllTemplates();
}

function getTemplateById(id) {
  return db.getTemplateById(id);
}

function createNewTemplate(templateData) {
  return db.createTemplate(templateData);
}

function updateExistingTemplate(id, updates) {
  return db.updateTemplate(id, updates);
}

function deleteExistingTemplate(id) {
  return db.deleteTemplate(id);
}

// Helper function to find templates by field
function findTemplateByField(field, value) {
  return getAllTemplates().find((template) => template[field] === value);
}

/**
 * Template class - handles resume template operations
 */
class Template {
  // Get all available templates
  static getAll() {
    return getAllTemplates();
  }

  // Get template by ID
  static getById(id) {
    return getTemplateById(id);
  }

  // Create new template
  static create(templateData) {
    return createNewTemplate(templateData);
  }

  // Update template by ID
  static update(id, updates) {
    return updateExistingTemplate(id, updates);
  }

  // Delete template by ID
  static delete(id) {
    return deleteExistingTemplate(id);
  }

  // Generic find by field method
  static findBy(field, value) {
    return findTemplateByField(field, value);
  }
}

module.exports = Template;
