"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anonymizeUser = anonymizeUser;
/**
 * Anonymize sensitive fields (email, phone, name)
 */
function anonymizeUser(user) {
    return {
        ...user,
        email: user.email ? "hidden@example.com" : null,
        phone: user.phone ? "**********" : null,
        name: "Anonymous",
    };
}
