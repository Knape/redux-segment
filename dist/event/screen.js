"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function validateScreenFields(fields) {
  if (fields.category && !fields.name) {
    return new Error("missing name field for EventTypes.screen");
  }

  return null;
}

function getScreenProperties(fields) {
  if (fields.category) return ["category", "name", "properties", "options"];
  if (!fields.name) return ["properties", "options"];

  return ["name", "properties", "options"];
}

function extractFields(obj, keys) {
  return keys.map(function (key) {
    return key === "properties" ? obj[key] || {} : obj[key];
  });
}

function extractScreenFields(fields) {
  // all fields are optional for screen events
  if (!fields) {
    return [];
  }

  var err = validateScreenFields(fields);
  if (err) return err;

  var props = getScreenProperties(fields);

  return extractFields(fields, props);
}

exports.extractScreenFields = extractScreenFields;