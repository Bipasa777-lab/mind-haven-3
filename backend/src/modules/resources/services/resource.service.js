"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceService = exports.ResourceService = void 0;
const resource_model_1 = require("../models/resource.model");
class ResourceService {
    async getAll() {
        return await resource_model_1.Resource.find().sort({ createdAt: -1 });
    }
    async getById(id) {
        return await resource_model_1.Resource.findById(id);
    }
    async create(data) {
        const resource = new resource_model_1.Resource(data);
        return await resource.save();
    }
    async update(id, data) {
        return await resource_model_1.Resource.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        return await resource_model_1.Resource.findByIdAndDelete(id);
    }
}
exports.ResourceService = ResourceService;
exports.resourceService = new ResourceService();
