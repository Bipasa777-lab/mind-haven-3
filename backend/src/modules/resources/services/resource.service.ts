import { Resource, IResource } from "../models/resource.model";

export class ResourceService {
  async getAll(): Promise<IResource[]> {
    return await Resource.find().sort({ createdAt: -1 });
  }

  async getById(id: string): Promise<IResource | null> {
    return await Resource.findById(id);
  }

  async create(data: Partial<IResource>): Promise<IResource> {
    const resource = new Resource(data);
    return await resource.save();
  }

  async update(id: string, data: Partial<IResource>): Promise<IResource | null> {
    return await Resource.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IResource | null> {
    return await Resource.findByIdAndDelete(id);
  }
}

export const resourceService = new ResourceService();
