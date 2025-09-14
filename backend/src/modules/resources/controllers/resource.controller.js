"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceController = exports.ResourceController = void 0;
const resource_service_1 = require("../services/resource.service");
class ResourceController {
    // ✅ Get all resources
    async getAll(req, res) {
        try {
            const resources = await resource_service_1.resourceService.getAll();
            res.json(resources);
        }
        catch (error) {
            console.error("Error fetching resources:", error);
            res.status(500).json({ error: "Failed to fetch resources" });
        }
    }
    // ✅ Get single resource by ID
    async getById(req, res) {
        try {
            const resource = await resource_service_1.resourceService.getById(req.params.id);
            if (!resource) {
                return res.status(404).json({ error: "Resource not found" });
            }
            res.json(resource);
        }
        catch (error) {
            console.error("Error fetching resource:", error);
            res.status(500).json({ error: "Failed to fetch resource" });
        }
    }
    // ✅ Create new resource
    async create(req, res) {
        try {
            const resource = await resource_service_1.resourceService.create(req.body);
            res.status(201).json(resource);
        }
        catch (error) {
            console.error("Error creating resource:", error);
            res.status(400).json({ error: "Failed to create resource" });
        }
    }
    // ✅ Update resource
    async update(req, res) {
        try {
            const resource = await resource_service_1.resourceService.update(req.params.id, req.body);
            if (!resource) {
                return res.status(404).json({ error: "Resource not found" });
            }
            res.json(resource);
        }
        catch (error) {
            console.error("Error updating resource:", error);
            res.status(400).json({ error: "Failed to update resource" });
        }
    }
    // ✅ Delete resource
    async delete(req, res) {
        try {
            const resource = await resource_service_1.resourceService.delete(req.params.id);
            if (!resource) {
                return res.status(404).json({ error: "Resource not found" });
            }
            res.json({ message: "Resource deleted successfully" });
        }
        catch (error) {
            console.error("Error deleting resource:", error);
            res.status(500).json({ error: "Failed to delete resource" });
        }
    }
}
exports.ResourceController = ResourceController;
exports.resourceController = new ResourceController();
