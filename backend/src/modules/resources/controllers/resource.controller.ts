import { Request, Response } from "express";
import { resourceService } from "../services/resource.service";

export class ResourceController {
  // ✅ Get all resources
  async getAll(req: Request, res: Response) {
    try {
      const resources = await resourceService.getAll();
      res.json(resources);
    } catch (error) {
      console.error("Error fetching resources:", error);
      res.status(500).json({ error: "Failed to fetch resources" });
    }
  }

  // ✅ Get single resource by ID
  async getById(req: Request, res: Response) {
    try {
      const resource = await resourceService.getById(req.params.id);
      if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
      }
      res.json(resource);
    } catch (error) {
      console.error("Error fetching resource:", error);
      res.status(500).json({ error: "Failed to fetch resource" });
    }
  }

  // ✅ Create new resource
  async create(req: Request, res: Response) {
    try {
      const resource = await resourceService.create(req.body);
      res.status(201).json(resource);
    } catch (error) {
      console.error("Error creating resource:", error);
      res.status(400).json({ error: "Failed to create resource" });
    }
  }

  // ✅ Update resource
  async update(req: Request, res: Response) {
    try {
      const resource = await resourceService.update(req.params.id, req.body);
      if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
      }
      res.json(resource);
    } catch (error) {
      console.error("Error updating resource:", error);
      res.status(400).json({ error: "Failed to update resource" });
    }
  }

  // ✅ Delete resource
  async delete(req: Request, res: Response) {
    try {
      const resource = await resourceService.delete(req.params.id);
      if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
      }
      res.json({ message: "Resource deleted successfully" });
    } catch (error) {
      console.error("Error deleting resource:", error);
      res.status(500).json({ error: "Failed to delete resource" });
    }
  }
}

export const resourceController = new ResourceController();
