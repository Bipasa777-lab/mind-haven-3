"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.getBookingById = exports.getBookings = exports.createBooking = void 0;
const svc = __importStar(require("../services/booking.service"));
const createBooking = async (req, res) => {
    try {
        const created = await svc.createBooking(req.body);
        return res.status(201).json(created);
    }
    catch (err) {
        return res.status(400).json({ message: err.message || "Create failed" });
    }
};
exports.createBooking = createBooking;
const getBookings = async (_req, res) => {
    try {
        const items = await svc.listBookings();
        return res.json(items);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
exports.getBookings = getBookings;
const getBookingById = async (req, res) => {
    try {
        const item = await svc.getBookingById(req.params.id);
        if (!item)
            return res.status(404).json({ message: "Not found" });
        return res.json(item);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
exports.getBookingById = getBookingById;
const updateBooking = async (req, res) => {
    try {
        const updated = await svc.updateBooking(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ message: "Not found" });
        return res.json(updated);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
exports.updateBooking = updateBooking;
const deleteBooking = async (req, res) => {
    try {
        const deleted = await svc.deleteBooking(req.params.id);
        if (!deleted)
            return res.status(404).json({ message: "Not found" });
        return res.json({ message: "Deleted" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
exports.deleteBooking = deleteBooking;
